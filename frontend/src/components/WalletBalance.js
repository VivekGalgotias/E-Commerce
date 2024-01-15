// src/components/WalletBalance.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie'; // Import useCookies hook
import './WalletBalance.css';

const WalletBalance = () => {
  const [walletBalance, setWalletBalance] = useState(0);
  const [cookies] = useCookies(['jwtToken']); // Retrieve 'jwtToken' from cookies

  useEffect(() => {
    const fetchWalletBalance = async () => {
      try {
        // Retrieve JWT token from cookies
        const jwtToken = cookies.jwtToken;

        if (!jwtToken) {
          console.error('JWT token not found in the cookie');
          return;
        }

        const response = await axios.get('http://localhost:6969/api/buyer/wallet', {
          headers: {
            Authorization: `Bearer ${jwtToken}`, // Pass the JWT token in the Authorization header
          },
        });
        setWalletBalance(response.data.walletBalance);
      } catch (error) {
        console.error('Error fetching wallet balance:', error);
      }
    };

    fetchWalletBalance();
  }, [cookies]);

  return (
    <div className="wallet-balance">
      <h2>Your Wallet Balance:</h2>
      <p>${walletBalance}</p>
    </div>
  );
};

export default WalletBalance;
