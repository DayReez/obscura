import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './assets/arcane wallpaper 1.png';

function LoginCompanyPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Example: Restrict to company domain if needed
    if (!email.endsWith('@gmail.com')) {
      alert('❌ Only company emails (e.g., user@gmail.com) are allowed');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/company-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('userRole', data.role);
        localStorage.setItem('companyName', data.companyName);
        navigate('/company/dashboard');
      } else {
        alert(`❌ ${data.error || 'Login failed. Please verify your company credentials.'}`);
      }
    } catch (err) {
      alert('🚨 Cannot connect to the authentication server. Please contact support.');
      console.error('Connection error:', err);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className="p-4 rounded"
        style={{
          width: '100%',
          maxWidth: '450px',
          background: 'rgba(255, 255, 255, 0.15)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
        }}
      >
        <h2 className="mb-4 text-center text-white">Company Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-white">Company Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter official company email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label text-white">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your  password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">Login to Dashboard</button>
        </form>
      </div>
    </div>
  );
}

export default LoginCompanyPage;
