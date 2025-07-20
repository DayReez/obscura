import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './assets/arcane wallpaper 1.png';

function RegisterCompanyPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    phone: '',
    password: '',
    companySize: '',
    industry: '',
    termsAccepted: false,
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.termsAccepted) {
      setMessage('Please accept the Terms of Service.');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          companyName: formData.companyName,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
          companySize: formData.companySize,
          industry: formData.industry,
          role: 'company',
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('✅ Registered successfully!');
        setFormData({
          companyName: '',
          email: '',
          phone: '',
          password: '',
          companySize: '',
          industry: '',
          termsAccepted: false,
        });
        navigate('/home-company'); // ✅ navigate after registration
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
          maxWidth: '500px',
          background: 'rgba(255, 255, 255, 0.15)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
        }}
      >
        <h2 className="mb-4 text-center text-white">Company Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="companyName" className="form-label text-white">
              Company name
            </label>
            <input
              type="text"
              className="form-control"
              id="companyName"
              placeholder="ABC Pvt Ltd"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label text-white">
              Business email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="example@company.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label text-white">
              Company phone number
            </label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              placeholder="+1 (555) 123-4567"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label text-white">
              Set a password for your company account
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
            />
            <label className="form-check-label text-white" htmlFor="termsAccepted">
              I agree to the Terms of Service
            </label>
          </div>

          {message && <div className="text-light text-center mb-2">{message}</div>}

          <button type="submit" className="btn btn-primary w-100">
            Register Company
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterCompanyPage;
