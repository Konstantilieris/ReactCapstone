import React from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion

// Create a motion-enabled button component
const MotionButton = motion(Button);

const CustomButton = ({ children, path }) => {
  return (
    <MotionButton
      as={Link}
      to={path}
      borderRadius="16px"
      bg="#f4ce14"
      color="#333333"
      _hover={{ bg: "#e0b812" }}
      // Framer Motion hover animation
      whileHover={{ scale: 1.1 }} // Scale up when hovering
      whileTap={{ scale: 0.95 }} // Scale down slightly when clicked
      transition={{ type: "spring", stiffness: 300 }} // Smooth spring-like transition
    >
      {children}
    </MotionButton>
  );
};

export default CustomButton;
