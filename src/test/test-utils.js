// test-utils.js
import { render } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react"; // Import ChakraProvider

// Custom render function that wraps components with ChakraProvider
const customRender = (ui, options = {}) =>
  render(ui, { wrapper: ChakraProvider, ...options });

export * from "@testing-library/react"; // Re-export everything
export { customRender as render }; // Export our custom render function
