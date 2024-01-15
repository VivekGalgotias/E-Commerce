// src/components/PurchasesList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PurchasesList.css';

const PurchasesList = () => {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const response = await axios.get('http://localhost:3030/api/buyer/purchases', {
          headers: {
            Authorization: `Bearer YOUR_JWT_TOKEN`,
          },
        });
        setPurchases(response.data.purchases);
      } catch (error) {
        console.error('Error fetching purchases:', error);
      }
    };

    fetchPurchases();
  }, []);

  return (
    <div className="purchases-list">
      <h2>Your Purchases:</h2>
      <ul>
        {purchases.map((purchase) => (
          <li key={purchase._id}>{purchase.name} - ${purchase.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default PurchasesList;
