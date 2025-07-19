import { useLocation } from 'react-router-dom';
import styles from './BookPageConfirm.module.css';

function BookPage() {
  const location = useLocation();
  const { title, description } = location.state || {};

  const handleConfirm = () => {
    alert('Booking Confirmed!');
  };

  return (
    <div className={styles.bookPageContainer}>
      <h2>Confirm Your Booking</h2>
      <h3>{title}</h3>
      <p>{description}</p>

      <div className={styles.bookingActions}>
        <button className={styles.confirmBtn} onClick={handleConfirm}>Confirm</button>
      </div>
    </div>
  );
}

export default BookPage;
