// TODO: Implement InputField CSC.
'use client';

import React from 'react'
import { useFormik } from 'formik';

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" className="text-black"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <label htmlFor="password">Password</label>
      <input id="password" type="password" className="text-black"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <button>Login</button>
    </form>
  )
}
