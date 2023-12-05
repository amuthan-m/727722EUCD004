import React, { useRef, useEffect, useState, createContext, useContext } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// Theme Context
const ThemeContext = createContext();

// UserProfile Component
const UserProfile = ({ user }) => {
    const emailRef = useRef(null);
    const theme = useContext(ThemeContext);

    useEffect(() => {
        console.log('Component Mounted');
    }, []);

    return (
        <div style={{ color: theme.color }}>
            <Typography variant="h6">{user.name}</Typography>
            <TextField inputRef={emailRef} label="Email" defaultValue={user.email} />
            <Button variant="contained" onClick={() => emailRef.current.focus()}>
                Focus Email
            </Button>
        </div>
    );
};

// withValidation HOC
const withValidation = (Component) => {
    return (props) => {
        const { user } = props;
        if (!user.name || !user.email) {
            return <Typography variant="subtitle1">Invalid user data</Typography>;
        }
        return <Component {...props} />;
    };
};

// Enhanced UserProfile with Validation
const ValidatedUserProfile = withValidation(UserProfile);

// App Component
const App = () => {
    const [theme, setTheme] = useState({ color: 'blue' }); // Example theme
    const user = { name: 'John Doe', email: 'johndoe@example.com' }; // Example user

    return (
        <ThemeContext.Provider value={theme}>
            <ValidatedUserProfile user={user} />
        </ThemeContext.Provider>
    );
};

export default App;
