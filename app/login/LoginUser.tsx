"use client";

import React from "react";
import { Formik, Form } from "formik";
import InputField from "../components/InputField";
import FormButton from "../components/FormButton";

// TODO: Backend communication to login succesfully
// TODO: Buttons for Auth with other platforms

export default function LoginUser() {
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      <Form className="flex flex-col">
        <InputField
          type="email"
          name="email"
          label="Email"
          placeholder="email@email.com"
        />
        <InputField type="password" name="password" label="Password" />
        <FormButton text="Login" />
      </Form>
    </Formik>
  );
}
