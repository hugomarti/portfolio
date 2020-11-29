import React from "react";
import {
  Button,
  Flex,
  FormLabel,
  Input,
  Textarea,
  Box,
  FormControl,
  FormHelperText,
} from "@chakra-ui/core";
import * as Yup from "yup";
import { FiSend } from "react-icons/fi";
import { Formik } from "formik";

const validationSchema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string().email().required().label("Email"),
  message: Yup.string().required().label("Message"),
});

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const FormikForm = ({ submited }) => {
  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...values }),
        })
          .then(() => {
            submited(true);
            setSubmitting(false);
          })
          .catch((error) => {
            alert("Error: Please Try Again!");
            setSubmitting(false);
          });
      }}
    >
      {({
        handleChange,
        handleSubmit,
        isSubmitting,
        errors,
        touched,
        setFieldTouched,
      }) => (
        <Box w="100%">
          <form name="contact" data-netlify={true} method="post">
            <input type="hidden" name="form-name"></input>
            <input type="hidden" name="bot-field"></input>
            <FormControl>
              <FormLabel color="#CCC5B9">Name:</FormLabel>
              <Input
                variant="flushed"
                color="#CCC5B9"
                style={{ borderColor: "#CCC5B9" }}
                name="name"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel color="#CCC5B9" mt="1rem">
                Email:
              </FormLabel>
              <Input
                variant="flushed"
                color="#CCC5B9"
                style={{ borderColor: "#CCC5B9" }}
                name="email"
                onChange={handleChange}
                onBlur={() => setFieldTouched("email")}
              />
              {!touched.email || !errors.email ? null : (
                <FormHelperText color="orange.100">
                  {errors.email}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl isRequired>
              <FormLabel color="#CCC5B9" mt="1rem">
                Message:
              </FormLabel>
              <Textarea
                variant="flushed"
                color="#CCC5B9"
                style={{ borderColor: "#CCC5B9" }}
                name="message"
                onChange={handleChange}
                onBlur={() => setFieldTouched("message")}
              />
              {!touched.message || !errors.message ? null : (
                <FormHelperText color="orange.100">
                  {errors.message}
                </FormHelperText>
              )}
            </FormControl>
            <Flex
              mt="1rem"
              flexDir={{ xl: "row", lg: "row", md: "row", base: "column" }}
              alignItems="flex-start"
              w="100%"
            >
              <Button
                leftIcon={<FiSend />}
                mt="1rem"
                bg="#EB5E28"
                _hover={{ bg: "#CC5325" }}
                size="sm"
                onClick={handleSubmit}
                isLoading={isSubmitting}
                loadingText="Enviando..."
              >
                Send
              </Button>
            </Flex>
          </form>
        </Box>
      )}
    </Formik>
  );
};

export default FormikForm;
// onSubmit={(values, actions) => {
//         setTimeout(() => {
//           console.log(values);
//           actions.setSubmitting(false);
//           submited(true);
//         }, 2000);
//       }}
