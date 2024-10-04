import React from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Avatar,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const reviews = [
  {
    title: "Excellent Service",
    body: "The service was fantastic and the staff was very friendly.",
    reviewer: "John Doe",
    date: "Jan 1, 2023",
    avatar: "https://bit.ly/dan-abramov",
  },
  {
    title: "Great Experience",
    body: "I had a wonderful experience and will definitely come back!",
    reviewer: "Jane Smith",
    date: "Feb 15, 2023",
    avatar: "https://bit.ly/ryan-florence",
  },
  {
    title: "Highly Recommend",
    body: "I highly recommend this place to anyone looking for quality service.",
    reviewer: "Alice Johnson",
    date: "Mar 10, 2023",
    avatar: "https://bit.ly/kent-c-dodds",
  },
  {
    title: "Fantastic!",
    body: "Absolutely fantastic! Couldn’t have asked for more.",
    reviewer: "Bob Brown",
    date: "Apr 5, 2023",
    avatar: "https://bit.ly/prosper-baba",
  },
];

const CustomersSay = () => {
  return (
    <Box
      px={24}
      py={10}
      className="bg-primary"
      color={"white"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Heading fontSize={60} mb={10}>
        Our customers love us
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
        {reviews.map((review, index) => (
          <Box
            key={index}
            p={8}
            shadow="md"
            borderWidth="1px"
            borderRadius="md"
            display={"flex"}
            flexDirection={"column"}
            bg={"white"}
            color={"black"}
            gap={2}
          >
            <HStack spacing={1}>
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon key={i} color="teal.500" />
                ))}
            </HStack>
            <Heading as="h3" size="md" mt={2}>
              {review.title}
            </Heading>
            <Text mt={2}>{review.body}</Text>
            <HStack mt={4} justifySelf={"end"} alignSelf={"start"}>
              <Avatar src={review.avatar} size="sm" />
              <VStack align="start" spacing={0}>
                <Text fontWeight="bold">{review.reviewer}</Text>
                <Text fontSize="sm" color="gray.500">
                  {review.date}
                </Text>
              </VStack>
            </HStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default CustomersSay;
