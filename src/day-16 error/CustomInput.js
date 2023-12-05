import React from 'react';
import './App.css';

const CustomInput = ({ type, name, placeholder, value, onChange }) => {
  return <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} />;
};

export default CustomInput;
