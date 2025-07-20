import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import image from "./assets/image.png"; // No longer needed, as image comes from props

// ✨ ADDED imageUrl to the destructuring of props ✨
function ImageOverlayCard({ companyName, companyLocation, imageUrl }) {
  const cardTitle = companyName || "Explore the Mountains";
  const overlayText = companyLocation || "Your next adventure awaits!";
  const descriptionText = "Discover breathtaking views and serene trails. This destination offers an unforgettable experience for nature lovers and adventurers alike. Plan your trip today!";

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-sm border">

            {/* Image section with overlay */}
            <div className="position-relative">
              <Card.Img
                // ✨ USED imageUrl PROP FOR SRC ✨
                src={imageUrl}
                alt="Card image"
                className="w-100"
                style={{ height: "300px", objectFit: "cover" }}
              />

              <Card.ImgOverlay
                className="d-flex flex-column justify-content-end align-items-start p-4"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
              >
                <Card.Title className="fs-3 fw-bold text-white mb-2">
                  {cardTitle}
                </Card.Title>
                <Card.Text className="text-white mb-3">
                  {overlayText}
                </Card.Text>
              </Card.ImgOverlay>
            </div>

            {/* Description section */}
            <Card.Body className="bg-white text-dark p-4">
              <Card.Text>
                {descriptionText}
              </Card.Text>
            </Card.Body>

          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ImageOverlayCard;