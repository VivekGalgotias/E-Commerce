// src/components/PurchaseProduct.js
import React, { useState } from 'react';
import axios from 'axios';
import './PurchaseProduct.css';

const PurchaseProduct = () => {
  const [productId, setProductId] = useState('');

  const handlePurchase = async () => {
    try {
      await axios.post(`http://localhost:3030/api/buyer/purchase/${productId}`, null, {
        headers: {
          Authorization: `Bearer YOUR_JWT_TOKEN`,
        },
      });
      alert('Product purchased successfully!');
    } catch (error) {
      console.error('Error purchasing product:', error);
      alert('Error purchasing product. Please try again.');
    }
  };

  return (
    <div className="purchase-product">
      <h2>Purchase Product:</h2>
      <label htmlFor="productId">Product ID:</label>
      <input
        type="text"
        id="productId"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <button onClick={handlePurchase}>Purchase</button>
    </div>
  );
};

export default PurchaseProduct;
