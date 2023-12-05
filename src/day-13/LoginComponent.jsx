import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from './UserContext'; // Import UserContext

const LoginComponent = () => {
  const [users, setUsers] = useState([]);
  const [loginDetails, setLoginDetails] = useState({ username: '', password: '' });
  const { setUser } = useContext(UserContext); // Use the context

  useEffect(() => {
    axios.get('https://6566de2d64fcff8d730f2d13.mockapi.io/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error:', error));
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const foundUsers = users.filter(user => user.username === loginDetails.username);
    
    if (foundUsers.length > 0) {
      setUser(foundUsers[0]); // Set the found user in context
      alert('User exists');
    } else {
      alert('User not found.');
      
    }
  };

  const handleInputChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        name="username"
        type="text"
        placeholder="Username"
        value={loginDetails.username}
        onChange={handleInputChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={loginDetails.password}
        onChange={handleInputChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginComponent;
