import React, { useReducer, useEffect, useState } from "react";
import BookingForm from "../components/Booking/BookingForm";
import { fetchAPI } from "../utils/fakeApi";
// Replace with your initial available times
import { submitAPI } from "../utils/fakeApi";
import { useNavigate } from "react-router-dom";
import { BookingConsumer } from "../context/BookingContext";
const timesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      // Update available times based on the selected date
      return action.payload; // Replace with logic to determine available times
    default:
      return state;
  }
};

function Main() {
  const { setData } = BookingConsumer();
  const [availableTimes, dispatch] = useReducer(timesReducer, []);
  const navigate = useNavigate();

  const updateTimes = async (selectedDate) => {
    const res = await fetchAPI(new Date(selectedDate));
    dispatch({ type: "UPDATE_TIMES", payload: res });
  };

  const initializeTimes = async () => {
    const today = new Date(); // Get today's date
    const res = await fetchAPI(today);

    return res;
    // Dispatch initial times
  };

  useEffect(() => {
    const fetchAPI = async () => {
      const times = await initializeTimes();
      dispatch({ type: "UPDATE_TIMES", payload: times });
    };
    fetchAPI();
  }, []);
  // Handle form submission
  const handleSubmit = async (values) => {
    console.log("Reservation Details:", values);
    setData(values);
    const res = await submitAPI(values);
    console.log("Response:", res);
    if (res) navigate("/confirmation");
  };

  return (
    <div>
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={updateTimes}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default Main;
