import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LandingPage.module.css';
import { Modal, Button } from 'react-bootstrap';

function LandingPage() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => setShowLoginModal(true);
  const handleRegisterClick = () => setShowRegisterModal(true);
  const handleCloseLogin = () => setShowLoginModal(false);
  const handleCloseRegister = () => setShowRegisterModal(false);

  const handleLoginChoice = (role) => {
    handleCloseLogin();
    if (role === 'user') navigate('/login-user');
    else if (role === 'company') navigate('/login-company');
  };

  const handleRegisterChoice = (role) => {
    handleCloseRegister();
    if (role === 'user') navigate('/register-user');
    else if (role === 'company') navigate('/register-company');
  };

  return (
    <div className={styles.landingPage}>
      <div className={styles.landingCard}>
        <h1>Welcome to TravelBuddy</h1>
        <p>Your next adventure starts here.</p>
        <div className={styles.landingActions}>
          <button onClick={handleLoginClick} className={styles.btn}>Login</button>
          <button onClick={handleRegisterClick} className={`${styles.btn} ${styles.btnSecondary}`}>Register</button>
        </div>
      </div>

      {/* Login Modal */}
      <Modal show={showLoginModal} onHide={handleCloseLogin} centered>
        <Modal.Header closeButton>
          <Modal.Title>Select Login Type</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p>Who are you logging in as?</p>
          <div className="d-flex justify-content-center gap-3 mt-3">
            <Button variant="primary" onClick={() => handleLoginChoice('user')}>
              Login as User
            </Button>
            <Button variant="success" onClick={() => handleLoginChoice('company')}>
              Login as Company
            </Button>
          </div>
        </Modal.Body>
      </Modal>

      {/* Register Modal */}
      <Modal show={showRegisterModal} onHide={handleCloseRegister} centered>
        <Modal.Header closeButton>
          <Modal.Title>Select Registration Type</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p>Who are you registering as?</p>
          <div className="d-flex justify-content-center gap-3 mt-3">
            <Button variant="primary" onClick={() => handleRegisterChoice('user')}>
              Register as User
            </Button>
            <Button variant="success" onClick={() => handleRegisterChoice('company')}>
              Register as Company
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default LandingPage;
