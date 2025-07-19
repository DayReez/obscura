import { useLocation } from 'react-router-dom';
import Header from "./Header.jsx";
import ImageOverlayCard from './ImageOverlayCard.jsx';
import Suggestions from "./suggestions.jsx";

function Pagetwo() {
  const location = useLocation();
  const { name, location: companyLocation } = location.state || {};

  return (
    <>
      <Header />
      <ImageOverlayCard companyName={name} companyLocation={companyLocation} />
      <Suggestions />
    </>
  );
}

export default Pagetwo;
