import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from ".assets/image.png";

function ImageOverlayCard() {
  const cardTitle = "Explore the Mountains";
  const overlayText = "Your next adventure awaits!";
  const descriptionText = "Discover breathtaking views and serene trails. This destination offers an unforgettable experience for nature lovers and adventurers alike. Plan your trip today!";

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-sm border">

            {/* Image section with overlay */}
            <div className="position-relative"> {/* Container for image and overlay */}
              <Card.Img
                src={image}
                alt="Card image"
                className="w-100"
                style={{ height: "300px", objectFit: "cover" }}
              />

              <Card.ImgOverlay
                className="d-flex flex-column justify-content-end align-items-start p-4" // Changed alignment and padding
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
              >
                <Card.Title className="fs-3 fw-bold text-white mb-2"> {/* Removed text-center, added mb-2 */}
                  {overlayText}
                </Card.Title>
                <Card.Text className="text-white mb-3"> {/* Removed text-center, added mb-3 */}
                  A journey of a thousand miles begins with a single step.
                </Card.Text>
                {/* <Button variant="light">Learn More</Button> */}
              </Card.ImgOverlay>
            </div>

            {/* Description section with white background */}
            <Card.Body className="bg-white text-dark p-4"> {/* Added bg-white and padding */}
              <Card.Title>{cardTitle}</Card.Title>
              <Card.Text>
                {descriptionText}
              </Card.Text>
              <Button variant="primary">Book Now</Button>
            </Card.Body>

          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ImageOverlayCard;