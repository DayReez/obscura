import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Suggestions() {
  const navigate = useNavigate();

  const handleBook = (title, description) => {
    navigate('/book', {
      state: { title, description }
    });
  };

  return (
    <Container className="mt-3 mb-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-sm" style={{ borderRadius: '0.75rem' }}>
            <Card.Header>Recommended packages</Card.Header>

            <Card.Body className="p-4">
              <Card.Title className="fs-5 fw-bold">Antarctica Tour Package</Card.Title>
              <Card.Text className="mb-3">
                12-day tour package to Antarctica with all the amenities included. Experience the beauty of the frozen continent like never before.
              </Card.Text>
              <Button variant="primary" onClick={() => handleBook(
                'Antarctica Tour Package',
                '12-day tour to Antarctica with all-inclusive features.'
              )}>Book now</Button>
            </Card.Body>

            <hr className="m-0" style={{ borderTop: '2px solid #ddd' }} />

            <Card.Body className="p-4">
              <Card.Title className="fs-5 fw-bold">America Tour</Card.Title>
              <Card.Text className="mb-3">
                18-day tour package to America with all the amenities included. Explore the diverse landscapes and cultures of the United States.
              </Card.Text>
              <Button variant="primary" onClick={() => handleBook(
                'America Tour',
                '18-day guided tour across the USA with accommodation and experiences.'
              )}>Book now</Button>
            </Card.Body>

          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Suggestions;
