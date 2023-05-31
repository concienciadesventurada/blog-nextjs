import React from 'react';
import { useField } from 'formik';

//TODO: Properly refactor and make reusable client side

interface InputFieldProps {
  email: string;
}

const InputField: React.FC<InputFieldProps> = ({...props}) => {
  const [field, meta] = useField(props.email);

  return (
    <>
      <input {...field} {...props}  />
      {meta.error && meta.touched && <div>{meta.error}</div>}
    </>
  )
}

export default InputField
