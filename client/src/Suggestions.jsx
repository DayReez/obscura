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
              <Card.Title className="fs-5 fw-bold">Special title treatment</Card.Title>
              <Card.Text className="mb-3"> {/* Added bottom margin */}
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            
            {/* Visual Separator */}
            <hr className="m-0" style={{borderTop: '2px solid #ddd'}} /> {/* Subtle divider */}
            
            {/* Second Card Body */}
            <Card.Body className="p-4"> {/* Matching padding */}
              <Card.Title className="fs-5 fw-bold">Special title treatment</Card.Title>
              <Card.Text className="mb-3">
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>

          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Suggestions;