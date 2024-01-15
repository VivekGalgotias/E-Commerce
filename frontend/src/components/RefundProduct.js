// src/components/RefundProduct.js
import React, { useState } from 'react';
import axios from 'axios';
import './RefundProduct.css';

const RefundProduct = () => {
  const [productId, setProductId] = useState('');

  const handleRefund = async () => {
    try {
      await axios.post(`http://localhost:3030/api/buyer/refund/${productId}`, null, {
        headers: {
          Authorization: `Bearer YOUR_JWT_TOKEN`,
        },
      });
      alert('Product refunded successfully!');
    } catch (error) {
      console.error('Error refunding product:', error);
      alert('Error refunding product. Please try again.');
    }
  };

  return (
    <div className="refund-product">
      <h2>Refund Product:</h2>
      <label htmlFor="productId">Product ID:</label>
      <input
        type="text"
        id="productId"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <button onClick={handleRefund}>Refund</button>
    </div>
  );
};

export default RefundProduct;
