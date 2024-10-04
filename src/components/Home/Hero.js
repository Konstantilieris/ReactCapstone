import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import CustomButton from "../ui/Button";

const Hero = () => {
  return (
    <Box bg={"white"} height={"44vh"} position={"relative"}>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        p={8}
        bg={"#495E57"}
        px={60}
        height={"40vh"}
      >
        <Box flex="1" p={4} marginLeft={40}>
          <Heading as="h1" mb={4} fontSize={64} color={"#F4CE13"}>
            Little Lemon
          </Heading>
          <Text fontSize="40" mb={4} color={"white"}>
            Chicago
          </Text>
          <Text fontSize="18" mb={4} color={"white"} maxWidth={"20vw"}>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </Text>
          <CustomButton path={"/reservations"}>Reserve A Table</CustomButton>
        </Box>
        <Box
          p={4}
          position={"absolute"}
          right={"24vw"}
          rounded={"xl"}
          top={2}
          width={"25vw"}
        >
          <Image
            src="/icons_assets/restauranfood.jpg"
            alt="Hero Image"
            rounded={"xl"}
            height={"44vh"}
            width={"25vw"}
            objectFit={"cover"}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
