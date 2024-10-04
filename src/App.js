import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./components/layout/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ConfirmedBooking from "./pages/ConfirmedBooking";
import Booking from "./pages/Booking";
import Home from "./pages/Home";
import { BookingProvider } from "./context/BookingContext";
function App() {
  return (
    <ChakraProvider>
      <BookingProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/reservations" element={<Booking />} />
              <Route path="/confirmation" element={<ConfirmedBooking />} />
            </Routes>
          </Layout>
        </Router>
      </BookingProvider>
    </ChakraProvider>
  );
}

export default App;
