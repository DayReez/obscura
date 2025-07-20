import { useLocation } from 'react-router-dom';
import Header from "./Header.jsx";
import ImageOverlayCard from './ImageOverlayCard.jsx';
import Suggestions from "./suggestions.jsx";

function Pagetwo() {
  const location = useLocation();
  // ✨ EXTRACTED 'logo' from location.state ✨
  const { name, location: companyLocation, logo } = location.state || {};

  return (
    <>
      <Header />
      {/* ✨ PASSED 'logo' as imageUrl prop to ImageOverlayCard ✨ */}
      <ImageOverlayCard companyName={name} companyLocation={companyLocation} imageUrl={logo} />
      <Suggestions />
    </>
  );
}

export default Pagetwo;