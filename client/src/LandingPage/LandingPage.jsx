// src/LandingPage.jsx
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';

function LandingPage() {
  return (
    <div className={styles.landingPage}>
      <div className={styles.landingCard}>
        <h1>Welcome to TravelBuddy</h1>
        <p>Your next adventure starts here.</p>
        <div className={styles.landingActions}>
          <Link to="/login" className={styles.btn}>Login</Link>
          <Link to="/register" className={`${styles.btn} ${styles.btnSecondary}`}>Register</Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
