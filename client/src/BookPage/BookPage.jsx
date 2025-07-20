import { useLocation, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Header from '../Header.jsx';

function BookPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const tour = location.state;

  if (!tour) {
    return <p className="text-center mt-5">No tour package selected. Please go back and try again.</p>;
  }

  // ✨ EXTRACTED 'price' from tour object ✨
  const { title, description, shortDescription, price } = tour;

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Card className="shadow-lg p-4">
          <Card.Body>
            <Card.Title className="fs-3 fw-bold mb-3">{title}</Card.Title>
            <Card.Text className="mb-2"><strong>Short Description:</strong> {shortDescription}</Card.Text>
            <Card.Text className="mb-3"><strong>Full Details:</strong> {description}</Card.Text>
            {/* ✨ Display price on the BookPage as well ✨ */}
            <Card.Text className="mb-3"><strong>Price:</strong> {price}</Card.Text>
            <hr />
            <p className="fw-semibold">Would you like to confirm your booking?</p>
            <Button 
              variant="success" 
              className="me-2"
              // ✨ PASSED 'price' along to BookPageConfirm ✨
              onClick={() => navigate('/confirm', { state: { ...tour, price: price } })}
            >
              Confirm Booking
            </Button>
            <Button 
              variant="secondary"
              onClick={() => navigate(-1)}
            >
              Cancel
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default BookPage;