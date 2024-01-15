// src/components/ProductsList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductsList.css';

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:6969/api/products');
        console.log(response.data.allProducts);
        setProducts(response.data.allProducts); // Update this line
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="products-list">
      <h2>Products List:</h2>
      <ul>
        {products.map((product) => (
          <li key={product.productID}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
