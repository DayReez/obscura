import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import LoginPage from './LoginUserPage.jsx';
import RegisterPage from './RegisterUserPage.jsx';
import Pagetwo from './Pagetwo.jsx';
import BookPage from './BookPage/BookPage.jsx'; // ✅ BookPage route added
import BookPageConfirm from './BookPageConfirm/BookPageConfirm.jsx';
import LandingPage from './LandingPage/LandingPage.jsx';
import LoginUserPage from './LoginUserPage.jsx';
import LoginCompanyPage from './LoginCompanyPage.jsx';
import RegisterUserPage from './RegisterUserPage.jsx';
import RegisterCompanyPage from './RegisterCompanyPage.jsx';
import HomePageCompany from './HomePageCompany.jsx';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login-user" element={<LoginUserPage />} />
        <Route path="/login-company" element={<LoginCompanyPage />} />
        <Route path="/register-user" element={<RegisterUserPage />} />
        <Route path="/register-company" element={<RegisterCompanyPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/home-company" element={<HomePageCompany />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/company" element={<Pagetwo />} />
        <Route path="/book" element={<BookPage />} /> {/* ✅ Add this route */}
        <Route path="/confirm" element={<BookPageConfirm />} />
      </Routes>
    </Router>

  );
}

export default App;
