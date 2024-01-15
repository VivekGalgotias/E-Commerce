// src/components/SignOutPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const removeCookie = (name) => {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
};

const SignOutPage = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Remove the JWT token from the cookie
    removeCookie('jwtToken');

    // Navigate back to the login page
    navigate('/login');
  };

  return (
    <div>
      <h2>Sign Out</h2>
      <p>Are you sure you want to sign out?</p>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default SignOutPage;
