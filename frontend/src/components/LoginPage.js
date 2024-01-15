// src/components/LoginPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:6969/api/auth/login', {
        username,
        password,
      });

      // Extract the token from the response
      const { token } = response.data;

      // Store the token in a cookie (assuming you have a function to set cookies)
      setCookie('jwtToken', token, { expires: 1 }); // Adjust the expiration as needed

      console.log('Login successful! Token:', token);
      alert('Login successful!');

      // Navigate to the home page after successful login
      navigate('/home');
    } catch (error) {
      console.error('Error during login:', error);
      alert('Invalid credentials. Please try again.');
    }
  };

  const setCookie = (name, value, options) => {
    if (options.expires) {
      const date = new Date();
      date.setTime(date.getTime() + options.expires * 24 * 60 * 60 * 1000);
      options.expires = date;
    }
    document.cookie = `${name}=${value};${options.expires ? `expires=${options.expires.toUTCString()};` : ''}path=${options.path || '/'}`;
  };

  return (
    <div>
      <h2>Login Page</h2>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
