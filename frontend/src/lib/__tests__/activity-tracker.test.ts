import { logActivity } from '../activity-tracker';
import api from '../api';

// Mock the api module
jest.mock('../api', () => ({
  __esModule: true,
  default: {
    post: jest.fn(),
  },
}));

describe('logActivity', () => {
  let consoleErrorSpy: jest.SpyInstance;

  beforeEach(() => {
    jest.clearAllMocks();
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  it('should successfully log an activity without details', async () => {
    (api.post as jest.Mock).mockResolvedValueOnce({ data: 'success' });

    await logActivity('TEST_ACTION');

    expect(api.post).toHaveBeenCalledTimes(1);
    expect(api.post).toHaveBeenCalledWith('/analytics/events', {
      event_type: 'TEST_ACTION',
      event_data: {},
    });
    expect(consoleErrorSpy).not.toHaveBeenCalled();
  });

  it('should successfully log an activity with details', async () => {
    (api.post as jest.Mock).mockResolvedValueOnce({ data: 'success' });

    await logActivity('TEST_ACTION', 'Some extra details');

    expect(api.post).toHaveBeenCalledTimes(1);
    expect(api.post).toHaveBeenCalledWith('/analytics/events', {
      event_type: 'TEST_ACTION',
      event_data: { details: 'Some extra details' },
    });
    expect(consoleErrorSpy).not.toHaveBeenCalled();
  });

  it('should catch and log errors without bubbling them up when api.post fails', async () => {
    const mockError = new Error('Network error');
    (api.post as jest.Mock).mockRejectedValueOnce(mockError);

    // This should not throw an exception
    await logActivity('FAILED_ACTION');

    expect(api.post).toHaveBeenCalledTimes(1);
    expect(api.post).toHaveBeenCalledWith('/analytics/events', {
      event_type: 'FAILED_ACTION',
      event_data: {},
    });

    expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    expect(consoleErrorSpy).toHaveBeenCalledWith('Failed to log activity', mockError);
  });
});
