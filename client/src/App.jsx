// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import LoginPage from './LoginPage.jsx';
import RegisterPage from './RegisterPage.jsx';
import Pagetwo from './Pagetwo.jsx';
import BookPage from './BookPage/BookPage.jsx'; // ✅ Import BookPage
import BookPageConfirm from './BookPageConfirm/BookPageConfirm.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
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
