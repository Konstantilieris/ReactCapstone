import { render, screen } from "./test-utils"; // Use the custom render from test-utils
import BookingForm from "../components/Booking/BookingForm";

test("Renders the BookingForm heading", () => {
  render(<BookingForm />); // This now uses ChakraProvider under the hood
  const headingElement = screen.getByText(/Booking Form/i); // Case-insensitive search for the heading
  expect(headingElement).toBeInTheDocument();
});
