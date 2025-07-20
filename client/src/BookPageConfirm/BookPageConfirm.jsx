import { useLocation, useNavigate } from 'react-router-dom';
import styles from './BookPageConfirm.module.css';

function BookPageConfirm() {
  const location = useLocation();
  const navigate = useNavigate();
  // ✨ EXTRACTED 'price' from location.state ✨
  const { title, description, price } = location.state || {};

  const handleConfirm = () => {
    alert('Booking Confirmed!');
    // ✅ Navigate back to BookPage with state preserved (including price)
    navigate('/book', { state: location.state });
  };

  return (
    <div className={styles.bookPageContainer}>
      <h2>Confirm Your Booking</h2>
      <h3>{title}</h3>
      <p>{description}</p>
      {/* ✨ DISPLAY THE PRICE ✨ */}
      <p className={styles.priceText}><strong>Approximate Price:</strong> {price}</p>

      <div className={styles.bookingActions}>
        <button className={styles.confirmBtn} onClick={handleConfirm}>Confirm</button>
      </div>
    </div>
  );
}

export default BookPageConfirm;