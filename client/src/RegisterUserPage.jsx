import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Added
import backgroundImage from './assets/70777189-travel-hd-wallpaper.jpg';

function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    termsAccepted: false,
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // ✅ Added

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    const field = {
      nameInput: 'name',
      exampleInputEmail1: 'email',
      phoneInput: 'phone',
      exampleInputPassword1: 'password',
      exampleCheck1: 'termsAccepted',
    }[id];

    setFormData((prev) => ({
      ...prev,
      [field]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.termsAccepted) {
      setMessage('Please accept the Terms of Service.');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
          role: 'user',
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('✅ Registered successfully!');
        setFormData({ name: '', email: '', phone: '', password: '', termsAccepted: false });
        navigate('/home'); // ✅ Redirect to /home
      } else {
        setMessage(data.error || '❌ Registration failed.');
      }
    } catch (err) {
      console.error(err);
      setMessage('❌ Server error. Try again later.');
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
        <h2 className="mb-4 text-center text-white">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label text-white">Name</label>
            <input type="text" className="form-control" id="nameInput" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label text-white">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
            <div id="emailHelp" className="form-text text-light">We'll never share your email with anyone else.</div>
          </div>

          <div className="mb-3">
            <label htmlFor="phoneInput" className="form-label text-white">Phone Number</label>
            <input type="tel" className="form-control" id="phoneInput" placeholder="Enter phone number" value={formData.phone} onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label text-white">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter password" value={formData.password} onChange={handleChange} required />
          </div>

          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" checked={formData.termsAccepted} onChange={handleChange} />
            <label className="form-check-label text-white" htmlFor="exampleCheck1">
              I have read the Terms of Service
            </label>
          </div>

          {message && <div className="text-light text-center mb-2">{message}</div>}

          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
