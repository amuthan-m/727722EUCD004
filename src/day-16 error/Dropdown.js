// Dropdown.js
import React from 'react';
import './App.css';

const Dropdown = ({ name, options, value, onChange }) => {
  return (
    <select name={name} value={value} onChange={onChange}>
      {options.map(option => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

export default Dropdown;
