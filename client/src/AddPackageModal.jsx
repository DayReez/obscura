import { useState } from 'react';
import { Modal, Button, Form, Spinner } from 'react-bootstrap';

function AddPackageModal({ show, handleClose }) {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [days, setDays] = useState('');
  const [pitstops, setPitstops] = useState(['']);
  const [loading, setLoading] = useState(false);

  const handlePitstopChange = (index, value) => {
    const updated = [...pitstops];
    updated[index] = value;
    setPitstops(updated);
  };

  const handleAddPitstop = () => {
    setPitstops([...pitstops, '']);
  };

  const handleRemovePitstop = (index) => {
    const updated = pitstops.filter((_, i) => i !== index);
    setPitstops(updated);
  };

  const resetForm = () => {
    setTitle('');
    setLocation('');
    setPrice('');
    setDays('');
    setDescription('');
    setPitstops(['']);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (pitstops.some((stop) => stop.trim() === '')) {
      return alert('Please fill in all pitstop fields.');
    }

    const packageData = {
      title,
      location,
      price: Number(price),
      days: Number(days),
      description,
      itinerary: pitstops,
    };

    const token = localStorage.getItem('token');

    if (!token) {
      return alert('Authentication token not found. Please log in again.');
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/packages/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(packageData),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error('Upload failed:', result);
        alert(result.error || 'Upload failed. Please try again.');
      } else {
        alert('✅ Package uploaded successfully!');
        resetForm();
        handleClose();
      }
    } catch (err) {
      console.error('Error uploading:', err);
      alert('Something went wrong while uploading the package.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Add New Package</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Package Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Start Location</Form.Label>
            <Form.Control
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Number of Days</Form.Label>
            <Form.Control
              type="number"
              min="1"
              value={days}
              onChange={(e) => setDays(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Price (INR)</Form.Label>
            <Form.Control
              type="number"
              min="0"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Itinerary / Pitstops</Form.Label>
            {pitstops.map((stop, index) => (
              <div key={index} className="d-flex align-items-center mb-2">
                <Form.Control
                  type="text"
                  value={stop}
                  onChange={(e) => handlePitstopChange(index, e.target.value)}
                  required
                />
                {pitstops.length > 1 && (
                  <Button
                    variant="danger"
                    size="sm"
                    className="ms-2"
                    onClick={() => handleRemovePitstop(index)}
                  >
                    ✕
                  </Button>
                )}
              </div>
            ))}
            <Button variant="secondary" size="sm" onClick={handleAddPitstop}>
              + Add Pitstop
            </Button>
          </Form.Group>

          <div className="d-flex justify-content-end">
            <Button variant="secondary" onClick={handleClose} className="me-2" disabled={loading}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" disabled={loading}>
              {loading ? (
                <>
                  <Spinner animation="border" size="sm" className="me-2" />
                  Submitting...
                </>
              ) : (
                'Submit Package'
              )}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default AddPackageModal;
