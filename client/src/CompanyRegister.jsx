import { Form, Button, Container, Card, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function CompanyRegister() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    negotiable: 'yes',
    description: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/company/register', formData);
      localStorage.setItem('companyToken', response.data.token);
      navigate('/company/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <Container className="mt-5">
      <Card className="shadow-sm p-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2 className="text-center mb-4">Company Registration</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Allow Package Negotiation?</Form.Label>
            <Form.Select
              name="negotiable"
              value={formData.negotiable}
              onChange={handleChange}
            >
              <option value="yes">Yes, negotiable packages</option>
              <option value="no">No, fixed prices only</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Company Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Register
          </Button>
          <div className="mt-3 text-center">
            <Link to="/company/login">Already have an account? Login</Link>
          </div>
        </Form>
      </Card>
    </Container>
  );
}

export default CompanyRegister;