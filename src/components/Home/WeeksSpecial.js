import React from "react";
import { Box, Button, Image, Text, VStack, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion"; // Import motion
import CustomButton from "../ui/Button";

// Create a motion component using Box from Chakra UI
const MotionBox = motion(Box);

const WeeksSpecial = () => {
  return (
    <Box p={20}>
      <HStack
        justifyContent="space-between"
        mb={5}
        alignContent={"center"}
        padding={2}
      >
        <Text fontSize="2xl" fontWeight="bold">
          This Week's Special
        </Text>
        <CustomButton path="/order">Order Online</CustomButton>
      </HStack>
      <HStack spacing={5}>
        {[
          {
            id: 1,
            title: "Greek Salad",
            cost: "$12.99",
            description:
              "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
            imageUrl: "/icons_assets/greek salad.jpg",
          },
          {
            id: 2,
            title: "Bruchetta",
            cost: "$5.99",
            description:
              "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
            imageUrl: "/icons_assets/bruchetta.svg",
          },
          {
            id: 3,
            title: "Lemon Dessert",
            cost: "$5",
            description:
              "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            imageUrl: "/icons_assets/lemon dessert.jpg",
          },
        ].map((dish) => (
          <MotionBox
            key={dish.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            bg={"#D9D9D9"}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
            }}
            transition={{ type: "spring", stiffness: 300 }} // Smooth spring animation
          >
            <VStack spacing={3}>
              <Image
                src={dish.imageUrl}
                alt={dish.title}
                height={"15vh"}
                width={"100%"}
                objectFit={"cover"}
              />
              <Box
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                width={"100%"}
                padding={2}
              >
                <Text fontSize="xl" fontWeight="bold" alignSelf={"start"}>
                  {dish.title}
                </Text>
                <Text color={"green"}>{dish.cost}</Text>
              </Box>
              <Text className="primary" marginX={4}>
                {dish.description}
              </Text>
              <Button
                colorScheme="teal"
                marginBottom={2}
                marginLeft={4}
                alignSelf={"start"}
              >
                Order Delivery
              </Button>
            </VStack>
          </MotionBox>
        ))}
      </HStack>
    </Box>
  );
};

export default WeeksSpecial;
