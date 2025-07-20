import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function AddPackageModal({ show, handleClose }) {
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [pitstops, setPitstops] = useState(['']);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const packageData = {
      companyName,
      location,
      price,
      description,
      pitstops,
    };
    console.log('Submitting package:', packageData);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Add New Package</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>

          <Form.Group controlId="location" className="mt-3">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter start location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="location" className="mt-3">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter destination"
              value={location}
              onChange={(e) => setDestination(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Pitstops</Form.Label>
            {pitstops.map((stop, index) => (
              <div key={index} className="d-flex align-items-center mb-2">
                <Form.Control
                  type="text"
                  placeholder={`Pitstop ${index + 1}`}
                  value={stop}
                  onChange={(e) => handlePitstopChange(index, e.target.value)}
                />
                {pitstops.length > 1 && (
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleRemovePitstop(index)}
                    className="ms-2"
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

          <Form.Group controlId="price" className="mt-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter price in USD"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="description" className="mt-3">
            <Form.Label>Package Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter package details"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          

          <div className="d-flex justify-content-end mt-4">
            <Button variant="secondary" onClick={handleClose} className="me-2">
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Add Package
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default AddPackageModal;
