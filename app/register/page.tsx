'use client';

import React from 'react'
import { useFormik } from 'formik';

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: ''
    },
    onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      }
    });

  return (
    <div className='grid grid-cols-4'>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" className="border border-black"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label htmlFor="username">Username</label>
        <input id="username" type="username" className="border border-black"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" className="border border-black"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <button className='bg-celestucho'>Register</button>
      </form>
    </div>
  )
}
