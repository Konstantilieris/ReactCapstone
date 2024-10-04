import { Box } from "@chakra-ui/react";
import React from "react";
import Hero from "../components/Home/Hero";
import WeeksSpecial from "../components/Home/WeeksSpecial";
import CustomersSay from "../components/Home/CustomersSay";
import Chicago from "../components/Home/Chicago";

const Home = () => {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Hero />
      <WeeksSpecial />
      <CustomersSay />
      <Chicago />
    </Box>
  );
};

export default Home;
