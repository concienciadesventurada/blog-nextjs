"use client";

import React from "react";
import { Formik, Form } from "formik";
import InputField from "../components/InputField";
import FormButton from "../components/FormButton";
import { gql, useMutation } from "@apollo/client";

// TODO: Check how to implement codegen accordinly for typechecking
// FIX: Error sending the req, not complying with parameters expected with REGISTER_NEW_USER

const REGISTER_NEW_USER = gql`
  mutation Register($options: RegisterNewUserInput!) {
    register(options: $options) {
      errors {
        field
        message
      }
    }
  }
`;

export default function RegisterUser() {
  const [register, { data, loading, error }] = useMutation(REGISTER_NEW_USER);

  return (
    <Formik
      initialValues={{
        email: "",
        username: "",
        password: "",
      }}
      onSubmit={async (values) => {
        const response = await register({ variables: values });
        console.log(response);
      }}
    >
      <Form className="flex flex-col">
        <InputField
          type="email"
          name="email"
          label="Email"
          placeholder="email@email.com"
        />
        <InputField type="text" name="username" label="Username" />
        <InputField type="password" name="password" label="Password" />
        <FormButton text="Register" />
      </Form>
    </Formik>
  );
}
