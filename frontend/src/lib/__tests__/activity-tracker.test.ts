import { logActivity } from "../activity-tracker";
import api from "../api";

jest.mock("../api");

describe("logActivity", () => {
  let consoleErrorSpy: jest.SpyInstance;

  beforeEach(() => {
    jest.clearAllMocks();
    consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  it("should log activity with details correctly", async () => {
    (api.post as jest.Mock).mockResolvedValueOnce({});

    await logActivity("test_action", "test_details");

    expect(api.post).toHaveBeenCalledWith("/analytics/events", {
      event_type: "test_action",
      event_data: { details: "test_details" },
    });
    expect(consoleErrorSpy).not.toHaveBeenCalled();
  });

  it("should log activity without details correctly", async () => {
    (api.post as jest.Mock).mockResolvedValueOnce({});

    await logActivity("test_action");

    expect(api.post).toHaveBeenCalledWith("/analytics/events", {
      event_type: "test_action",
      event_data: {},
    });
    expect(consoleErrorSpy).not.toHaveBeenCalled();
  });

  it("should catch and log error if api.post fails", async () => {
    const error = new Error("API Error");
    (api.post as jest.Mock).mockRejectedValueOnce(error);

    await logActivity("test_action");

    expect(api.post).toHaveBeenCalledWith("/analytics/events", {
      event_type: "test_action",
      event_data: {},
    });
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Failed to log activity",
      error,
    );
  });
});
