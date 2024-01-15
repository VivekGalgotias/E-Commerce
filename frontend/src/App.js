// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import WalletBalance from './components/WalletBalance';
import ProductsList from './components/ProductsList';
import PurchaseProduct from './components/PurchaseProduct';
import RefundProduct from './components/RefundProduct';
import PurchasesList from './components/PurchasesList';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import SignOutPage from './components/SignOutPage';
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    // Additional logic based on your needs
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    // Additional logic based on your needs
  };

  return (
    <Router>
      <div className="app-container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {!isAuthenticated ? (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/sign-out">Sign Out</Link>
                </li>
              </>
            )}
          </ul>
        </nav>

        <hr />

        <Routes>
          {/* Redirect to the login page by default if not authenticated */}
          <Route
            path="/"
            element={<Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={<LoginPage onLogin={handleLogin} />}
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/home"
            element={
              <>
                <WalletBalance />
                <hr />
                <ProductsList />
                <hr />
                <PurchaseProduct />
                <hr />
                <RefundProduct />
                <hr />
                <PurchasesList />
              </>
            }
          />
          <Route
            path="/sign-out"
            element={<SignOutPage onLogout={handleLogout} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
