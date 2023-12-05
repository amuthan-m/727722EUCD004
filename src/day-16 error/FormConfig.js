const formConfig = {
    fields: [
      {
        name: 'name',
        label: 'Name',
        type: 'text',
        placeholder: 'Enter your name',
        validation: value => {
            if (value && value.trim() !== '') {
              return true;
            }
            return 'Name is required';
          }
      },
      {
        name: 'age',
        label: 'Age',
        type: 'number',
        placeholder: 'Enter your age',
        validation: value => {
            if (!isNaN(value) && value > 0) {
              return true;
            }
            return 'Age must be a positive number';
          }
      },
      {
        name: 'gender',
        label: 'Gender',
        type: 'dropdown',
        options: [{ value: '', label: 'Select Gender' }, { value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }],
        validation: value => ['male', 'female'].includes(value) || 'Gender selection is required',
      },
    ],
  };
  
  export default formConfig;
  