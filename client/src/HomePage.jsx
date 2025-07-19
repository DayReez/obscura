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
          companyName="WanderWise" 
          companyLocation="Kerala"
          companyDescription="helloAt WanderWise, we don’t just plan vacations—we craft unforgettable adventures. Specializing in curated travel experiences for families, solo travelers, and couples, our team of experts is dedicated to turning your dream trip into a seamless reality."
        />
        <TourCompanyCard
          companyLogo={companyLogo}
          companyName="Nomadic Trails" 
          companyLocation="Karnataka"
          companyDescription="Nomadic Trails connects wanderers with the hidden gems of the world. Whether you're craving the serene hills of Himachal, the vibrant streets of Tokyo, or the wild safaris of Africa, our tailor-made packages ensure you travel your way, stress-free."
        />
        <TourCompanyCard
          companyLogo={companyLogo}
          companyName="GlobeTrek Explorers" 
          companyLocation="Kerala"
          companyDescription="With a passion for discovery, GlobeTrek Explorers offers personalized itineraries, cultural immersion tours, and eco-friendly travel options for every kind of explorer. Your journey starts with us—and ends with memories that last a lifetime."
        />
        <TourCompanyCard
          companyLogo={companyLogo}
          companyName="Azure Horizons" 
          companyLocation="Tamil Nadu"
          companyDescription="Azure Horizons is your boutique travel agency for luxurious, offbeat, and accessible travel experiences. From wheelchair-friendly tours to bespoke wellness retreats, we ensure comfort and inclusivity for all adventurers."
        />
      </div>

      {/* Modal Component */}
      <AddPackageModal show={showModal} handleClose={handleCloseModal} />

      {/* <Footer /> */}
    </>
  );
}

export default HomePage;
