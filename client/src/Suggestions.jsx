import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Suggestions() {
  return (
    <Container className="mt-3 mb-5"> {/* Added margin top/bottom */}
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-sm" style={{borderRadius: '0.75rem'}}> {/* Rounded corners */}
            <Card.Header>Recommended packages</Card.Header>
            
            {/* First Card Body */}
            <Card.Body className="p-4"> {/* Increased padding */}
              <Card.Title className="fs-5 fw-bold">Antartica Tour package</Card.Title>
              <Card.Text className="mb-3"> {/* Added bottom margin */}
                12 days tour package to Antartica with all the amenities included. Experience the beauty of the frozen continent like never before.
              </Card.Text>
              <Button variant="primary">Book now</Button>
            </Card.Body>
            
            {/* Visual Separator */}
            <hr className="m-0" style={{borderTop: '2px solid #ddd'}} /> {/* Subtle divider */}
            
            {/* Second Card Body */}
            <Card.Body className="p-4"> {/* Matching padding */}
              <Card.Title className="fs-5 fw-bold">America tour</Card.Title>
              <Card.Text className="mb-3">
                18 days tour package to America with all the amenities included. Explore the diverse landscapes and cultures of the United States.
              </Card.Text>
              <Button variant="primary">Book now</Button>
            </Card.Body>

          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Suggestions;