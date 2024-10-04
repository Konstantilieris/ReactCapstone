import React from "react";
import {
  Box,
  Flex,
  Text,
  Link,
  VStack,
  HStack,
  Icon,
  Image,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box color="white" py={10} className="bg-primary">
      <Flex
        maxW="1200px"
        mx="auto"
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
      >
        <Box mb={{ base: 6, md: 0 }}>
          <Image
            src="/icons_assets/Logo .svg"
            alt="Logo"
            objectFit={"contain"}
            filter={"invert(1)"}
          />
        </Box>

        <VStack align="start" spacing={4} mb={{ base: 6, md: 0 }}>
          <Text fontSize="lg" fontWeight="bold">
            Doormat Navigation
          </Text>
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Menu</Link>
          <Link href="#">Order Online</Link>
          <Link href="#">Reservation</Link>
          <Link href="#">Login</Link>
        </VStack>

        <VStack align="start" spacing={4} mb={{ base: 6, md: 0 }}>
          <Text fontSize="lg" fontWeight="bold">
            Contacts
          </Text>
          <Text>Address: 123 Main St, Anytown, USA</Text>
          <Text>Phone: (123) 456-7890</Text>
          <Text>Email: info@example.com</Text>
        </VStack>

        <VStack align="start" spacing={4}>
          <Text fontSize="lg" fontWeight="bold">
            Social Media
          </Text>
          <HStack spacing={4}>
            <Link href="#" isExternal>
              <Icon as={FaFacebook} boxSize={6} />
            </Link>
            <Link href="#" isExternal>
              <Icon as={FaTwitter} boxSize={6} />
            </Link>
            <Link href="#" isExternal>
              <Icon as={FaInstagram} boxSize={6} />
            </Link>
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Footer;
