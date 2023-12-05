import React from 'react';
import PropTypes from 'prop-types';
import { FormControlLabel, FormGroup, Checkbox, Button } from '@mui/material';
import { useState } from 'react';


const UserProfile = ({ name, age, bio }) => {
    const [checkboxStatus, setcheckboxStatus] = useState(false);
    
    const handleChange = () => {
        setcheckboxStatus(!checkboxStatus);
    };

    const handleSubmit = () => {
        if(!checkboxStatus) {
            alert('you must agree the terms and conditions');
        } else {
            alert('Form submitted');
        }
    };

    return (
        <div>
            <h1>{name}</h1>
            <p>Age: {age}</p>
            <p>{bio}</p>
            <form onSubmit={handleSubmit}>
            <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked={checkboxStatus} onChange={handleChange}/>} label="Terms & Conditions" />
            </FormGroup>
            <Button type='submit'>Submit</Button>
            </form>
        </div>
    );
};

UserProfile.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    bio: PropTypes.string
};

UserProfile.defaultProps = {
    age: 0,
    bio: 'No biography provided.'
};

export default UserProfile;
