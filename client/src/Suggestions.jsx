import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Suggestions() {
  const navigate = useNavigate();

  // Array of tour packages with dynamic data
  const tourPackages = [
    {
      id: 1,
      title: 'Antarctica Tour Package',
      description: '12-day tour package to Antarctica with all the amenities included. Experience the beauty of the frozen continent like never before.',
      shortDescription: '12-day tour to Antarctica with all-inclusive features.'
    },
    {
      id: 2,
      title: 'America Tour',
      description: '18-day tour package to America with all the amenities included. Explore the diverse landscapes and cultures of the United States.',
      shortDescription: '18-day guided tour across the USA with accommodation and experiences.'
    },
    // Add more tour packages as needed
  ];

  const handleBook = (tour) => {
    navigate('/book', {
      state: tour
    });
  };


  return (
    <Container className="mt-3 mb-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-sm" style={{ borderRadius: '0.75rem' }}>
            <Card.Header>Recommended packages</Card.Header>
            
            {tourPackages.map((tour, index) => (
              <div key={tour.id}>
                <Card.Body className="p-4">
                  <Card.Title className="fs-5 fw-bold">{tour.title}</Card.Title>
                  <Card.Text className="mb-3">
                    {tour.description}
                  </Card.Text>
                  <Button 
                    variant="primary" 
                    onClick={() => handleBook(tour)}
                  >
                    Book now
                  </Button>

                </Card.Body>
                
                {/* Don't add hr after the last item */}
                {index !== tourPackages.length - 1 && (
                  <hr className="m-0" style={{ borderTop: '2px solid #ddd' }} />
                )}
              </div>
            ))}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Suggestions;