import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'; // Assuming Button is used somewhere, keeping it.
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// ✨ ADDED companyEmail and companyPhoneNumber to props destructuring ✨
function ImageOverlayCard({ companyName, companyLocation, imageUrl, companyEmail, companyPhoneNumber }) {
  const cardTitle = companyName || "Explore the Mountains";
  const overlayText = companyLocation || "Your next adventure awaits!";
  // The description text can be made more dynamic or include the contact info directly
  const descriptionText = "Discover breathtaking views and serene trails. This destination offers an unforgettable experience for nature lovers and adventurers alike. Plan your trip today!";

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-sm border">

            {/* Image section with overlay */}
            <div className="position-relative">
              <Card.Img
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
              {/* ✨ DISPLAY COMPANY CONTACT INFORMATION ✨ */}
              {companyEmail && (
                <Card.Text>
                  <strong>Email:</strong> <a href={`mailto:${companyEmail}`}>{companyEmail}</a>
                </Card.Text>
              )}
              {companyPhoneNumber && (
                <Card.Text>
                  <strong>Phone:</strong> <a href={`tel:${companyPhoneNumber}`}>{companyPhoneNumber}</a>
                </Card.Text>
              )}
            </Card.Body>

          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ImageOverlayCard;