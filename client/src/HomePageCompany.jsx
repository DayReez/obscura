import React, { useState } from 'react';
import { Button, Card, Form, Modal } from 'react-bootstrap';

function CompanyDashboard() {
  const [packages, setPackages] = useState([]);
  const [proposals, setProposals] = useState([
    { id: 1, customerName: 'Alice', packageDetails: 'Trip to Manali - 3 Days, 2 Nights', status: 'pending' },
    { id: 2, customerName: 'Bob', packageDetails: 'Ladakh Adventure - 5 Days', status: 'pending' },
  ]);

  const [newPackage, setNewPackage] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  const handleAddPackage = () => {
    setPackages([...packages, { id: Date.now(), details: newPackage }]);
    setNewPackage('');
    setShowAddModal(false);
  };

  const handleDeletePackage = (id) => {
    setPackages(packages.filter(pkg => pkg.id !== id));
  };

  const handleProposalAction = (id, action) => {
    setProposals(proposals.map(p => p.id === id ? { ...p, status: action } : p));
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4">Company Dashboard</h2>

      <div className="mb-5">
        <h4>Manage Packages</h4>
        <Button variant="primary" onClick={() => setShowAddModal(true)}>Add Package</Button>
        <div className="mt-3">
          {packages.length === 0 && <p>No packages added yet.</p>}
          {packages.map(pkg => (
            <Card key={pkg.id} className="my-2">
              <Card.Body>
                <Card.Text>{pkg.details}</Card.Text>
                <Button variant="danger" onClick={() => handleDeletePackage(pkg.id)}>Delete</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h4>Customer Proposed Packages</h4>
        {proposals.length === 0 && <p>No customer proposals.</p>}
        {proposals.map(p => (
          <Card key={p.id} className="my-2">
            <Card.Body>
              <Card.Title>From: {p.customerName}</Card.Title>
              <Card.Text>{p.packageDetails}</Card.Text>
              <Card.Text>Status: <strong>{p.status}</strong></Card.Text>
              {p.status === 'pending' && (
                <>
                  <Button variant="success" onClick={() => handleProposalAction(p.id, 'negotiating')} className="me-2">Negotiate</Button>
                  <Button variant="danger" onClick={() => handleProposalAction(p.id, 'rejected')}>Reject</Button>
                </>
              )}
              {p.status === 'negotiating' && <p className="text-warning">Negotiation in progress</p>}
              {p.status === 'rejected' && <p className="text-danger">Proposal rejected</p>}
            </Card.Body>
          </Card>
        ))}
      </div>

      <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Package</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Package Details</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={newPackage}
                onChange={(e) => setNewPackage(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={handleAddPackage}>Add Package</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CompanyDashboard;
