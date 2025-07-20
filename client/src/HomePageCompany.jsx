import React, { useState } from 'react';
import { Button, Card, Form, Image } from 'react-bootstrap';
import AddPackageModal from './AddPackageModal.jsx';
import AddPackageRequestButton from './AddPackageRequestButton.jsx';

function CompanyDashboard() {
  const [packages, setPackages] = useState([]);
  const [proposals, setProposals] = useState([
    { id: 1, customerName: 'Alice', packageDetails: 'Trip to Manali - 3 Days, 2 Nights', status: 'pending' },
    { id: 2, customerName: 'Bob', packageDetails: 'Ladakh Adventure - 5 Days', status: 'pending' },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);

  // State for company profile details
  const [companyName, setCompanyName] = useState('Travel Co. Inc.'); // Default company name
  const [editingName, setEditingName] = useState(false); // State to manage name editing
  const [companyPhoto, setCompanyPhoto] = useState('https://via.placeholder.com/150'); // Default placeholder image
  const [companyDescription, setCompanyDescription] = useState('Welcome to our travel company! We offer exciting and memorable travel experiences.');
  const [editingDescription, setEditingDescription] = useState(false); // State to manage description editing

  const handleDeletePackage = (id) => {
    setPackages(packages.filter(pkg => pkg.id !== id));
  };

  const handleProposalAction = (id, action) => {
    setProposals(proposals.map(p => p.id === id ? { ...p, status: action } : p));
  };

  const handlePhotoChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCompanyPhoto(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  // Handlers for company name editing
  const handleNameChange = (event) => {
    setCompanyName(event.target.value);
  };

  const handleSaveName = () => {
    setEditingName(false);
  };

  // Handlers for description editing
  const handleDescriptionChange = (event) => {
    setCompanyDescription(event.target.value);
  };

  const handleSaveDescription = () => {
    setEditingDescription(false);
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4">Company Dashboard</h2>

      {/* Company Profile Section */}
      <div className="mb-5">
        <h4>Company Profile</h4>
        <div className="d-flex align-items-center mb-3">
          <div className="me-4 text-center">
            <Image src={companyPhoto} roundedCircle style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
            <Form.Group controlId="companyPhoto" className="mt-2">
              <Form.Label className="btn btn-sm btn-outline-secondary">Change Photo</Form.Label>
              <Form.Control type="file" accept="image/*" onChange={handlePhotoChange} className="d-none" />
            </Form.Group>
          </div>
          <div className="flex-grow-1"> {/* This div will take remaining space */}
            {/* Company Name Section */}
            <div className="mb-3">
              <h5>
                Company Name:{' '}
                {editingName ? (
                  <Form.Control
                    type="text"
                    value={companyName}
                    onChange={handleNameChange}
                    onBlur={handleSaveName}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleSaveName();
                      }
                    }}
                    autoFocus
                    className="d-inline-block w-auto ms-2"
                    style={{maxWidth: '300px'}} // Limit width of input
                  />
                ) : (
                  <>
                    {companyName}
                    <Button variant="link" onClick={() => setEditingName(true)} className="ms-2 p-0 text-decoration-none">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3.5-3.5zm-2.5 2.5L7.07 9.172 10.828 12.928 14.536 9.22l-3.707-3.708zm-3.396 7.33a.5.5 0 0 0-.146.146l-6.5 6.5a.5.5 0 0 0-.146.146V16h1.5l6.5-6.5c.092-.092.146-.22.146-.354V10.5z"/>
                      </svg>
                    </Button>
                  </>
                )}
              </h5>
            </div>

            {/* Company Description Section */}
            <div>
              <h5>Description</h5>
              {editingDescription ? (
                <>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={companyDescription}
                    onChange={handleDescriptionChange}
                  />
                  <Button variant="success" size="sm" className="mt-2" onClick={handleSaveDescription}>Save Description</Button>
                </>
              ) : (
                <>
                  <p>{companyDescription}</p>
                  <Button variant="secondary" size="sm" onClick={() => setEditingDescription(true)}>Edit Description</Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <h4>Manage Packages</h4>
        <AddPackageRequestButton onClick={() => setShowAddModal(true)} label="Add package" />
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