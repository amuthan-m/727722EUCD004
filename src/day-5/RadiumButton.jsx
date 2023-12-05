import React from 'react';
import Radium from 'radium';

// Button component with Radium
const RadiumButton = (props) => {
    // Styles for the button
    const styles = {
        button: {
            backgroundColor: '#007bff',
            border: 'none',
            color: 'white',
            padding: '10px 20px',
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '16px',
            margin: '4px 2px',
            cursor: 'pointer',

            ':hover': {
                backgroundColor: 'red'
            },
            ':focus': {
                backgroundColor: 'green'
            }
        }
    };

    return (
        <button style={styles.button}>{props.text}</button>
    );
}

// Wrap your component with Radium
export default Radium(RadiumButton);
