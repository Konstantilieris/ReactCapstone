import React from "react";
import { Box, Flex, Link, Spacer, Image } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      bg={"white"}
      px={4}
      fontSize={18}
      color={"#000000"}
      padding={10}
      alignContent={"center"}
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box height={47} width={165.44}>
          <Image src="/icons_assets/Logo.svg" alt="Logo" />
        </Box>
        <Spacer />
        <Flex alignItems="center" gap={12} display={"flex"}>
          <Link
            px={2}
            py={1}
            rounded={"md"}
            _hover={{
              textDecoration: "none",
              bg: "#495E57",
              borderRadius: "md",
            }}
            href="#"
          >
            Home
          </Link>
          <Link
            px={2}
            py={1}
            rounded={"md"}
            _hover={{
              textDecoration: "none",
              bg: "#495E57",
              borderRadius: "md",
            }}
            href="#"
          >
            About
          </Link>
          <Link
            px={2}
            py={1}
            rounded={"md"}
            _hover={{
              textDecoration: "none",
              bg: "#495E57",
              borderRadius: "md",
            }}
            href="#"
          >
            Menu
          </Link>
          <Link
            px={2}
            py={1}
            rounded={"md"}
            _hover={{
              textDecoration: "none",
              bg: "#495E57",
              borderRadius: "md",
            }}
            href="#"
          >
            Reservations
          </Link>
          <Link
            px={4}
            py={3}
            rounded={"md"}
            _hover={{
              textDecoration: "none",
              bg: "#495E57",
              borderRadius: "md",
            }}
            href="#"
          >
            Order Online
          </Link>
          <Link
            px={2}
            py={1}
            rounded={"md"}
            _hover={{
              textDecoration: "none",
              bg: "#495E57",
              borderRadius: "md",
            }}
            href="#"
          >
            Login
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
