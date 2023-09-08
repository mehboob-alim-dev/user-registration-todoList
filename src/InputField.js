import React from "react";

const InputField = ({ type, name, value, onChange, label }) => (
  <label>
    {label}:
    <input type={type} name={name} value={value} onChange={onChange} />
    <br />
  </label>
);

export default InputField;
