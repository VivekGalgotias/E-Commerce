// src/components/RegisterPage.js
import React, { useState } from 'react';
import axios from 'axios';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSeller, setIsSeller] = useState(false);

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:6969/api/auth/signup', {
        username,
        password,
        isSeller,
      });
      console.log(response.data); // You may handle the response as needed
      alert('User registered successfully!');
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Error during registration. Please try again.');
    }
  };

  return (
    <div>
      <h2>Register Page</h2>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <label>
        Is Seller:
        <input type="checkbox" checked={isSeller} onChange={() => setIsSeller(!isSeller)} />
      </label>

      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegisterPage;
