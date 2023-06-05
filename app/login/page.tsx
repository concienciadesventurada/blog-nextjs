// TODO: Abstract and reduce to its own login/register component
"use client";

import React from "react";
import { Formik, Form } from "formik";
import InputField from "../components/InputField";
import FormButton from "../components/FormButton";

export default function Login() {

  return (
    <div className="flex text-gris">
      <div className="h-screen w-1/6 flex flex-col justify-center items-center bg-blancucho">
        <Formik
          initialValues={{
            email: "",
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
            <InputField type="email" name="email" label="Email" />
            <InputField type="password" name="password" label="Password" />
            <FormButton text="Login" />
          </Form>
        </Formik>
      </div>
      <div className="w-5/6">a</div>
    </div>
  );
}
