import { Container, Card, Button, Row, Col, Tab, Tabs } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PackageForm from './PackageForm';

function CompanyDashboard() {
  const [company, setCompany] = useState(null);
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const companyRes = await axios.get('/api/company/profile');
        const packagesRes = await axios.get('/api/company/packages');
        setCompany(companyRes.data);
        setPackages(packagesRes.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Welcome, {company?.name}</h2>
      
      <Tabs defaultActiveKey="packages" className="mb-4">
        <Tab eventKey="packages" title="Your Packages">
          <Row className="mt-3">
            <Col md={4}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Add New Package</Card.Title>
                  <PackageForm companyId={company._id} />
                </Card.Body>
              </Card>
            </Col>
            {packages.map((pkg) => (
              <Col md={4} key={pkg._id} className="mb-3">
                <PackageCard pkg={pkg} />
              </Col>
            ))}
          </Row>
        </Tab>
        <Tab eventKey="profile" title="Company Profile">
          <CompanyProfile company={company} />
        </Tab>
      </Tabs>
    </Container>
  );
}

function PackageCard({ pkg }) {
  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title>{pkg.name}</Card.Title>
        <Card.Text>{pkg.description}</Card.Text>
        <div className="mb-2">
          {pkg.tags.map(tag => (
            <span key={tag} className="badge bg-secondary me-1">{tag}</span>
          ))}
        </div>
        <Card.Text>
          <strong>Price:</strong> ${pkg.price}
          {pkg.negotiable && <span className="text-success ms-2">(Negotiable)</span>}
        </Card.Text>
        <Button variant="primary" size="sm" className="me-2">Edit</Button>
        <Button variant="danger" size="sm">Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default CompanyDashboard;