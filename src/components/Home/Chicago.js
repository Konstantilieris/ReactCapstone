import React from "react";
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";

const Chicago = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      px={20}
      py={20}
      alignContent={"center"}
      justifyContent={"center"}
      minH={"70vh"}
    >
      <Box flex="1" mr={{ md: 5 }} mt={20}>
        <Heading fontSize={60} mb={4} className="primary">
          Little Lemon
        </Heading>
        <Heading className="highlight-black" fontSize={40} mb={4}>
          Chicago
        </Heading>
        <Text className="highlight-black">
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment the
          restaurant features a locally sourced menu with daily specials.Little
          Lemon is a charming neighborhood bistro that serves simple food and
          classic cocktails in a lively but casual environment the restaurant
          features a locally sourced menu with daily specials.
        </Text>
      </Box>
      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        position={"relative"}
      >
        <Image
          src="/icons_assets/Mario and Adrian A.jpg"
          alt="Image 1"
          mb={4}
          rounded={"xl"}
          w={312}
          h={304}
          objectFit={"cover"}
          position={"absolute"}
          top={200}
          zIndex={1}
        />
        <Image
          src="/icons_assets/Mario and Adrian B.jpg"
          alt="Image 2"
          mb={4}
          rounded={"xl"}
          w={312}
          h={304}
          objectFit={"cover"}
          position={"absolute"}
          left={170}
          zIndex={0}
        />
      </Box>
    </Flex>
  );
};

export default Chicago;
