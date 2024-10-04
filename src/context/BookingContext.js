import React, { useContext } from "react";

const BookingContext = React.createContext();

export const BookingProvider = ({ children }) => {
  const [data, setData] = React.useState([]);
  return (
    <BookingContext.Provider value={{ data, setData }}>
      {children}
    </BookingContext.Provider>
  );
};

export const BookingConsumer = () => {
  return useContext(BookingContext);
};
