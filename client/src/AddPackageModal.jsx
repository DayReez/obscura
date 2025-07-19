// src/AddPackageModal.jsx
import { Modal, Button, Form } from 'react-bootstrap';

function AddPackageModal({ show, handleClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle package data submission here
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Add New Package</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="companyName">
            <Form.Label>Company Name</Form.Label>
            <Form.Control type="text" placeholder="Enter company name" required />
          </Form.Group>

          <Form.Group controlId="location" className="mt-3">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" placeholder="Enter location" required />
          </Form.Group>

          <Form.Group controlId="price" className="mt-3">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" placeholder="Enter price in USD" required />
          </Form.Group>

          {/* You can add more fields below */}
          <Form.Group controlId="description" className="mt-3">
            <Form.Label>Package Description</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter package details" />
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
