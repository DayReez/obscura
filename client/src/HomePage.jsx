import { useState } from 'react';
import AddPackageModal from './AddPackageModal';
import Header from './Header.jsx';
import HomePageHero from './HomePageHero.jsx';
import TourCompanyCard from './TourCompanyCard.jsx';
import companyLogo from './assets/react.svg';

import backgroundImage2 from './assets/background image 1.png';
import backgroundImage3 from './assets/70777189-travel-hd-wallpaper.jpg'; 
import AddPackageRequestButton from './AddPackageRequestButton.jsx';
// import Footer from './Footer.jsx';

function HomePage() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Header />
      <div id="home-page-hero"></div>
      {/* <HomePageHero /> */}
      <div id="featured-heading-div">
        <h3 id="featured-heading">Featured Companies & packages</h3>
        <AddPackageRequestButton onClick={handleOpenModal} />
      </div>

      <div className="tour-company-card-div">
        <TourCompanyCard
          companyLogo={companyLogo}
          companyName="Boom" 
          companyLocation="Kerala"
          companyDescription="hello"
        />
        <TourCompanyCard
          companyLogo={companyLogo}
          companyName="Boom" 
          companyLocation="Kerala"
          companyDescription="hello"
        />
        <TourCompanyCard
          companyLogo={companyLogo}
          companyName="Boom" 
          companyLocation="Kerala"
          companyDescription="hello"
        />
        <TourCompanyCard
          companyLogo={companyLogo}
          companyName="Boom" 
          companyLocation="Kerala"
          companyDescription="hello"
        />
      </div>

      {/* Modal Component */}
      <AddPackageModal show={showModal} handleClose={handleCloseModal} />

      {/* <Footer /> */}
    </>
  );
}

export default HomePage;
