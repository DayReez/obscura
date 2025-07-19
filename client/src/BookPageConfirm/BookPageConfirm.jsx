import { useLocation, useNavigate } from 'react-router-dom';
import styles from './BookPageConfirm.module.css';

function BookPageConfirm() {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, description } = location.state || {};

  const handleConfirm = () => {
    alert('Booking Confirmed!');
    // ✅ Navigate back to BookPage with state preserved
    navigate('/book', { state: location.state });
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

export default BookPageConfirm;
