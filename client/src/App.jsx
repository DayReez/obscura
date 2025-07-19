// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import LoginPage from './LoginPage.jsx'; // Optional
import RegisterPage from './RegisterPage.jsx'; // Optional
import Pagetwo from './Pagetwo.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/company/" element={<Pagetwo />} />
      </Routes>
    </Router>

  );
}

export default App;
