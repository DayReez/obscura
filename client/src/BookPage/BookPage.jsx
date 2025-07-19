import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './BookPage.module.css';

function BookPage() {
  const [showModal, setShowModal] = useState(true);
  const location = useLocation();
  const { title, description } = location.state || {};

  const handleClose = () => {
    setShowModal(false);
  };

  const handleConfirm = () => {
    alert('Booking Confirmed!');
    setShowModal(false);
  };

  return (
    <>
      <div className={styles.bookPageContainer}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h2>Confirm Booking: {title}</h2>
            <p>{description}</p>
            <div className={styles.modalActions}>
              <button className={styles.confirmBtn} onClick={handleConfirm}>Confirm</button>
              <button className={styles.cancelBtn} onClick={handleClose}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BookPage;
