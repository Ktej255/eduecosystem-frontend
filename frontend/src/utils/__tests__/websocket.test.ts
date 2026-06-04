import WebSocketClient from "../websocket";

// Mock the global WebSocket object
class MockWebSocket {
  url: string;
  readyState: number;
  onopen: (() => void) | null = null;
  onmessage: ((event: any) => void) | null = null;
  onerror: ((error: any) => void) | null = null;
  onclose: (() => void) | null = null;
  sendMock = jest.fn();
  closeMock = jest.fn();

  constructor(url: string) {
    this.url = url;
    this.readyState = WebSocket.CONNECTING;
    // Store the instance so tests can manipulate it
    (global as any).lastWebSocketInstance = this;
  }

  send(data: string) {
    this.sendMock(data);
  }

  close() {
    this.readyState = WebSocket.CLOSED;
    this.closeMock();
    if (this.onclose) {
      this.onclose();
    }
  }

  // Helper methods to simulate server behavior
  simulateOpen() {
    this.readyState = WebSocket.OPEN;
    if (this.onopen) this.onopen();
  }

  simulateMessage(data: any) {
    if (this.onmessage) this.onmessage({ data: JSON.stringify(data) });
  }

  simulateError(error: any) {
    if (this.onerror) this.onerror(error);
  }

  simulateClose() {
    this.readyState = WebSocket.CLOSED;
    if (this.onclose) this.onclose();
  }
}

// Add WebSocket states
Object.assign(MockWebSocket, {
  CONNECTING: 0,
  OPEN: 1,
  CLOSING: 2,
  CLOSED: 3,
});

describe("WebSocketClient", () => {
  let originalWebSocket: any;
  let client: WebSocketClient;

  beforeAll(() => {
    // Save original WebSocket
    originalWebSocket = global.WebSocket;
  });

  afterAll(() => {
    // Restore original WebSocket
    global.WebSocket = originalWebSocket;
  });

  beforeEach(() => {
    // Reset global instance and mock
    delete (global as any).lastWebSocketInstance;
    (global as any).WebSocket = MockWebSocket;
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');

    client = new WebSocketClient("/test-endpoint");
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  const getMockWS = (): MockWebSocket => (global as any).lastWebSocketInstance;

  test("connects successfully and sets up handlers", () => {
    const onConnectSpy = jest.fn();
    client.onConnect(onConnectSpy);

    client.connect("test-token");
    const ws = getMockWS();

    expect(ws.url).toContain("token=test-token");
    expect(client.isConnected()).toBe(false);

    ws.simulateOpen();

    expect(onConnectSpy).toHaveBeenCalled();
    expect(client.isConnected()).toBe(true);
  });

  test("sends message when connected", () => {
    client.connect("test-token");
    const ws = getMockWS();
    ws.simulateOpen();

    const message = { type: "test", data: 123 };
    client.send(message);

    expect(ws.sendMock).toHaveBeenCalledWith(JSON.stringify(message));
  });

  test("does not send message when disconnected", () => {
    // Spy on console.warn
    const warnSpy = jest.spyOn(console, "warn").mockImplementation(() => {});

    client.connect("test-token");
    const message = { type: "test", data: 123 };
    client.send(message);

    const ws = getMockWS();
    expect(ws.sendMock).not.toHaveBeenCalled();
    expect(warnSpy).toHaveBeenCalledWith(
      "⚠️ WebSocket not connected. Message not sent:",
      message
    );

    warnSpy.mockRestore();
  });

  test("handles incoming messages and routes them correctly", () => {
    client.connect("test-token");
    const ws = getMockWS();
    ws.simulateOpen();

    const specificHandler = jest.fn();
    const catchAllHandler = jest.fn();

    client.on("specific_type", specificHandler);
    client.on("*", catchAllHandler);

    const testMessage = { type: "specific_type", payload: "hello" };
    ws.simulateMessage(testMessage);

    expect(specificHandler).toHaveBeenCalledWith(testMessage);
    expect(catchAllHandler).toHaveBeenCalledWith(testMessage);
  });

  test("allows unregistering message handlers", () => {
    client.connect("test-token");
    const ws = getMockWS();
    ws.simulateOpen();

    const handler = jest.fn();
    client.on("test_type", handler);
    client.off("test_type", handler);

    ws.simulateMessage({ type: "test_type", data: "hello" });

    expect(handler).not.toHaveBeenCalled();
  });

  test("handles intentional disconnection", () => {
    const onDisconnectSpy = jest.fn();
    client.onDisconnect(onDisconnectSpy);

    client.connect("test-token");
    const ws = getMockWS();
    ws.simulateOpen();

    client.disconnect();

    expect(ws.closeMock).toHaveBeenCalled();
    expect(client.isConnected()).toBe(false);
    expect(onDisconnectSpy).toHaveBeenCalled();

    // Fast-forward timers to check if it tries to reconnect
    jest.runAllTimers();

    // Since it was an intentional disconnect, the mock shouldn't be recreated
    // However, getMockWS() still returns the first instance.
    // The test to ensure no reconnection is that a second instance wasn't created.
    // Let's spy on the connect method.
    const connectSpy = jest.spyOn(client, "connect");
    jest.runAllTimers();
    expect(connectSpy).not.toHaveBeenCalled();
  });

  describe("resilience and reconnection", () => {
    test("attempts to reconnect on unintentional disconnect with exponential backoff", () => {
      const consoleLogSpy = jest.spyOn(console, "log").mockImplementation(() => {});
      (global.setTimeout as jest.Mock).mockClear();

      client.connect("test-token");
      const ws = getMockWS();
      ws.simulateOpen(); // Connects

      // Simulate an unintentional close
      ws.simulateClose();

      // Check for first reconnect attempt (1000ms delay)
      expect(setTimeout).toHaveBeenCalledTimes(1);
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);

      // Advance by 1000ms
      jest.advanceTimersByTime(1000);

      // The previous connection attempt should have created a new mock WS
      const ws2 = getMockWS();
      expect(ws2).not.toBe(ws);

      // Second failure
      ws2.simulateClose();

      // Next reconnect should be 2000ms
      expect(setTimeout).toHaveBeenCalledTimes(2);
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);

      // Advance by 2000ms
      jest.advanceTimersByTime(2000);
      const ws3 = getMockWS();

      // Third failure
      ws3.simulateClose();

      // Next reconnect should be 4000ms
      expect(setTimeout).toHaveBeenCalledTimes(3);
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 4000);

      consoleLogSpy.mockRestore();
    });

    test("stops reconnecting after maxReconnectAttempts", () => {
      const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
      const consoleLogSpy = jest.spyOn(console, "log").mockImplementation(() => {});

      client.connect("test-token");

      for (let i = 0; i < 5; i++) {
        const ws = getMockWS();
        ws.simulateClose();

        // Calculate the delay for this attempt (1000, 2000, 4000, 8000, 16000)
        const delay = 1000 * Math.pow(2, i);
        jest.advanceTimersByTime(delay);
      }

      // 6th failure should hit the max reconnect attempts (5)
      const wsFinal = getMockWS();
      wsFinal.simulateClose();

      expect(consoleErrorSpy).toHaveBeenCalledWith("❌ Max reconnection attempts reached");

      consoleErrorSpy.mockRestore();
      consoleLogSpy.mockRestore();
    });

    test("caps exponential backoff at maxReconnectDelay", () => {
      const consoleLogSpy = jest.spyOn(console, "log").mockImplementation(() => {});
      (global.setTimeout as jest.Mock).mockClear();

      client.connect("test-token");

      // 1st attempt: 1000
      getMockWS().simulateClose();
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
      jest.advanceTimersByTime(1000);

      // 2nd attempt: 2000
      getMockWS().simulateClose();
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
      jest.advanceTimersByTime(2000);

      // 3rd attempt: 4000
      getMockWS().simulateClose();
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 4000);
      jest.advanceTimersByTime(4000);

      // 4th attempt: 8000
      getMockWS().simulateClose();
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 8000);
      jest.advanceTimersByTime(8000);

      // 5th attempt: 16000
      getMockWS().simulateClose();
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 16000);
      jest.advanceTimersByTime(16000);

      // Next attempt would be 32000, but should be capped at 30000
      // Let's modify the class to increase max reconnect attempts so we can test the delay cap
      (client as any).maxReconnectAttempts = 10;

      // 6th attempt: capped at 30000
      getMockWS().simulateClose();
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 30000);
      jest.advanceTimersByTime(30000);

      // 7th attempt: stays at 30000
      getMockWS().simulateClose();
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 30000);

      consoleLogSpy.mockRestore();
    });

    test("resets reconnect attempts and delay on successful connection", () => {
      const consoleLogSpy = jest.spyOn(console, "log").mockImplementation(() => {});

      client.connect("test-token");

      // Fail once
      const ws1 = getMockWS();
      ws1.simulateClose();

      expect((client as any).reconnectAttempts).toBe(1);
      expect((client as any).reconnectDelay).toBe(2000); // Because it multiplied the *next* delay

      jest.advanceTimersByTime(1000);

      // Succeed on the second try
      const ws2 = getMockWS();
      ws2.simulateOpen();

      expect((client as any).reconnectAttempts).toBe(0);
      expect((client as any).reconnectDelay).toBe(1000);

      consoleLogSpy.mockRestore();
    });
  });
});
