import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { BookingConsumer } from "../context/BookingContext";
const ConfirmedBooking = () => {
  const { data } = BookingConsumer();
  return (
    <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      borderRadius="md"
      h={"47vh"}
      alignContent={"center"}
      justifyContent={"center"}
    >
      <VStack spacing={4}>
        <Heading as="h2" size="lg">
          Booking Confirmed!
        </Heading>
        <Text fontSize="xl">Your booking date is:</Text>
        <Text fontSize="2xl" fontWeight="bold">
          {data.date}
        </Text>
      </VStack>
    </Box>
  );
};

export default ConfirmedBooking;
