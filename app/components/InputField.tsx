import React from "react";
import { useField } from "formik";

interface InputFieldProps {
  type: string;
  name: string;
  label: string;
  placeholder?: string;
  email?: string;
  username?: string;
  password?: string;
  title?: string;
  content?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label>{label}</label>
      <input
        {...field}
        {...props}
        className="rounded-md h-10 mb-4 focus:outline outline-dorado"
      />
      {meta.error && meta.touched ? <div>{meta.error}</div> : null}
    </>
  );
};

export default InputField;
