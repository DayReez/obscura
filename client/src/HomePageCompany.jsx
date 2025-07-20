import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import AddPackageModal from './AddPackageModal.jsx';
import AddPackageRequestButton from './AddPackageRequestButton.jsx';

function CompanyDashboard() {
  const [packages, setPackages] = useState([]);
  const [proposals, setProposals] = useState([
    { id: 1, customerName: 'Alice', packageDetails: 'Trip to Manali - 3 Days, 2 Nights', status: 'pending' },
    { id: 2, customerName: 'Bob', packageDetails: 'Ladakh Adventure - 5 Days', status: 'pending' },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);

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
        <AddPackageRequestButton onClick={() => setShowAddModal(true)} />
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

      <AddPackageModal show={showAddModal} handleClose={() => setShowAddModal(false)} />
    </div>
  );
}

export default CompanyDashboard;
