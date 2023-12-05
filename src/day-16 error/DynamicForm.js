// DynamicForm.js
import React, { useState } from 'react';
import formConfig from './FormConfig';
import CustomInput from './CustomInput';
import Dropdown from './Dropdown';
import './App.css';

const DynamicForm = () => {
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    let isValid = true;
  
    formConfig.fields.forEach(field => {
      const value = formData[field.name];
      const validationMessage = field.validation(value);
      if (validationMessage !== true) {
        newErrors[field.name] = validationMessage;
        isValid = false;
      }
    });
  
    if (isValid) {
      console.log('Form submitted:', formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {formConfig.fields.map(field => (
        <div key={field.name}>
          <label>{field.label}</label>
          {field.type === 'dropdown' ? (
            <Dropdown
              name={field.name}
              options={field.options}
              value={formData[field.name] || ''}
              onChange={handleChange}
            />
          ) : (
            <CustomInput
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name] || ''}
              onChange={handleChange}
            />
          )}
          {errors[field.name] && <p className="error">{errors[field.name]}</p>}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;
