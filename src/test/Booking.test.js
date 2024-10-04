const fetchAPI = jest.fn();
const submitAPI = jest.fn();
const dispatch = jest.fn();

jest.mock("../utils/fakeApi", () => ({
  fetchAPI: jest.fn(),
  submitAPI: jest.fn(),
}));
describe("Booking functions", () => {
  beforeEach(() => {
    // Clear mocks before each test
    fetchAPI.mockClear();
    dispatch.mockClear();
  });

  test("updateTimes should call fetchAPI and dispatch the correct action", async () => {
    // Arrange
    const selectedDate = "2024-10-05";
    const mockResponse = ["10:00 AM", "11:00 AM"];

    fetchAPI.mockResolvedValue(mockResponse); // Mock fetchAPI to resolve with mockResponse

    // Act
    const { updateTimes } = require("../components/Booking/Booking"); // Import the function
    await updateTimes(selectedDate);

    // Assert
    expect(fetchAPI).toHaveBeenCalledWith(new Date(selectedDate)); // Ensure fetchAPI was called with the correct date
    expect(dispatch).toHaveBeenCalledWith({
      type: "UPDATE_TIMES",
      payload: mockResponse,
    });
  });

  test("initializeTimes should return the correct response from fetchAPI", async () => {
    // Arrange
    const mockResponse = ["9:00 AM", "10:00 AM"];
    fetchAPI.mockResolvedValue(mockResponse); // Mock fetchAPI to resolve with mockResponse

    // Act
    const { initializeTimes } = require("../components/Booking/Booking"); // Import the function
    const result = await initializeTimes();

    // Assert
    expect(fetchAPI).toHaveBeenCalledWith(expect.any(Date)); // Ensure fetchAPI was called with a Date object
    expect(result).toBe(mockResponse); // Ensure initializeTimes returns the correct result
  });
});
