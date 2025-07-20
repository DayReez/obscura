import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Suggestions({ companySuggestions }) {
  const navigate = useNavigate();

  const tourPackages = companySuggestions || [
    {
      id: 101,
      title: 'Default Adventure Package',
      description: 'Explore breathtaking landscapes and create unforgettable memories.',
      shortDescription: 'A fantastic default adventure awaits!',
      price: '₹20,000' // Default price for fallback
    },
    {
      id: 102,
      title: 'Default City Break',
      description: 'Discover the vibrant culture and history of a bustling metropolis.',
      shortDescription: 'Your perfect urban escape.',
      price: '₹10,000' // Default price for fallback
    }
  ];

  const handleBook = (tour) => {
    navigate('/book', {
      // ✨ ADDED price to the state object ✨
      state: { ...tour, price: tour.price }
    });
  };

  return (
    <Container className="mt-3 mb-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-sm" style={{ borderRadius: '0.75rem' }}>
            <Card.Header>Recommended packages</Card.Header>
            
            {tourPackages.length === 0 ? (
              <Card.Body className="p-4">
                <Card.Text>No specific packages available for this company yet.</Card.Text>
              </Card.Body>
            ) : (
              tourPackages.map((tour, index) => (
                <div key={tour.id}>
                  <Card.Body className="p-4">
                    <Card.Title className="fs-5 fw-bold">{tour.title}</Card.Title>
                    <Card.Text className="mb-3">
                      {tour.description}
                    </Card.Text>
                    {/* Optionally display price here as well */}
                    <Card.Text className="text-muted mb-2">Price: {tour.price}</Card.Text>
                    <Button 
                      variant="primary" 
                      onClick={() => handleBook(tour)}
                    >
                      Book now
                    </Button>
                  </Card.Body>
                  
                  {index !== tourPackages.length - 1 && (
                    <hr className="m-0" style={{ borderTop: '2px solid #ddd' }} />
                  )}
                </div>
              ))
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Suggestions;