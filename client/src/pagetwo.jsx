import { useLocation } from 'react-router-dom';
import Header from "./Header.jsx";
import ImageOverlayCard from './ImageOverlayCard.jsx';
import Suggestions from "./suggestions.jsx";

function Pagetwo() {
  const location = useLocation();
  // ✨ EXTRACTED 'email' and 'phoneNumber' from location.state ✨
  const { name, location: companyLocation, logo, email, phoneNumber } = location.state || {};

  return (
    <>
      <Header />
      {/* ✨ PASSED email and phoneNumber as props to ImageOverlayCard ✨ */}
      <ImageOverlayCard 
        companyName={name} 
        companyLocation={companyLocation} 
        imageUrl={logo} 
        companyEmail={email} 
        companyPhoneNumber={phoneNumber} 
      />
      <Suggestions />
    </>
  );
}

export default Pagetwo;