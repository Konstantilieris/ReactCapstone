import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Box,
  Heading,
  FormErrorMessage,
} from "@chakra-ui/react";
import { submitAPI } from "../../utils/fakeApi";

// Define validation schema using Yup
const BookingSchema = Yup.object().shape({
  date: Yup.string().required("Date is required"),
  time: Yup.string().required("Time is required"),
  guests: Yup.number()
    .min(1, "At least 1 guest")
    .max(10, "No more than 10 guests")
    .required("Number of guests is required"),
  occasion: Yup.string().required("Occasion is required"),
});

const BookingForm = ({ availableTimes, updateTimes, handleSubmit }) => {
  return (
    <Box
      w={"100%"}
      mx="auto"
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      padding={20}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Heading fontSize={40} mb={5}>
        Booking Form
      </Heading>

      <Formik
        initialValues={{
          date: "",
          time: "",
          guests: "",
          occasion: "",
        }}
        validationSchema={BookingSchema}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm(); // Reset the form after submission
        }}
      >
        {({ errors, touched, setFieldValue }) => (
          <Form>
            {/* Date input */}
            <FormControl
              isInvalid={errors.date && touched.date}
              isRequired
              maxW={80}
            >
              <FormLabel htmlFor="date" fontSize={20}>
                Choose Date
              </FormLabel>
              <Field
                as={Input}
                id="date"
                name="date"
                type="date"
                onChange={(event) => {
                  const { value } = event.target;
                  setFieldValue("date", value);

                  updateTimes(value); // Call updateTimes on date change
                }}
              />
              <FormErrorMessage>{errors.date}</FormErrorMessage>
            </FormControl>

            {/* Time select */}
            <FormControl
              isInvalid={errors.time && touched.time}
              isRequired
              mt={4}
              maxW={80}
            >
              <FormLabel htmlFor="time" fontSize={20}>
                Choose Time
              </FormLabel>
              <Field
                as={Select}
                id="time"
                name="time"
                placeholder="Select time"
              >
                {availableTimes.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
              </Field>
              <FormErrorMessage>{errors.time}</FormErrorMessage>
            </FormControl>

            {/* Number of guests */}
            <FormControl
              isInvalid={errors.guests && touched.guests}
              isRequired
              mt={4}
              maxW={80}
            >
              <FormLabel htmlFor="guests" fontSize={20}>
                Number of Guests
              </FormLabel>
              <Field
                as={Input}
                id="guests"
                name="guests"
                type="number"
                min="1"
                max="10"
              />
              <FormErrorMessage>{errors.guests}</FormErrorMessage>
            </FormControl>

            {/* Occasion select */}
            <FormControl
              isInvalid={errors.occasion && touched.occasion}
              isRequired
              mt={4}
              maxW={80}
            >
              <FormLabel htmlFor="occasion" fontSize={20}>
                Occasion
              </FormLabel>
              <Field
                as={Select}
                id="occasion"
                name="occasion"
                placeholder="Select occasion"
              >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </Field>
              <FormErrorMessage>{errors.occasion}</FormErrorMessage>
            </FormControl>

            {/* Submit button */}
            <Button type="submit" colorScheme="teal" mt={6}>
              Make Your Reservation
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default BookingForm;
