import { useState, useEffect } from 'react';
import AddPackageModal from './AddPackageModal';
import Header from './Header.jsx';
import TourCompanyCard from './TourCompanyCard.jsx';
import AddPackageRequestButton from './AddPackageRequestButton.jsx';

// Import individual company logos
// Make sure these paths are correct relative to HomePage.jsx
import wanderWiseLogo from './assets/MUNNAR.jpg'; // Example: Use a specific logo for WanderWise
import nomadicTrailsLogo from './assets/Milford-Sound-Fiordland-National-Park.webp'; // Example: Use another logo for Nomadic Trails
import globeTrekLogo from './assets/istockphoto-1183878653-612x612.jpg'; // Example: Use a third logo for GlobeTrek
import azureHorizonsLogo from './assets/Intrepid-Travel-Iceland_Golden-Circle_jokulsarlon-glacier-lagoon-boat-tour_Ryan-Bolton7342.jpg'; // Example: Use a fourth logo for Azure Horizons
// Add more imports for each unique company logo you have

function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  // Update the companies array to include a 'logo' property for each company
  const companies = [
    {
      name: "WanderWise",
      location: "Kerala",
      description:
        "At WanderWise, we craft unforgettable adventures. Specializing in curated travel experiences for families, solo travelers, and couples.",
      logo: wanderWiseLogo, // Assign the specific imported logo
    },
    {
      name: "Nomadic Trails",
      location: "Karnataka",
      description:
        "Nomadic Trails connects wanderers with the hidden gems of the world. Tailor-made packages for stress-free travel.",
      logo: nomadicTrailsLogo, // Assign the specific imported logo
    },
    {
      name: "GlobeTrek Explorers",
      location: "Kerala",
      description:
        "GlobeTrek Explorers offers personalized itineraries, cultural immersion tours, and eco-friendly travel options.",
      logo: globeTrekLogo, // Assign the specific imported logo
    },
    {
      name: "Azure Horizons",
      location: "Tamil Nadu",
      description:
        "Azure Horizons is your boutique travel agency for luxurious, offbeat, and accessible travel experiences.",
      logo: azureHorizonsLogo, // Assign the specific imported logo
    },
    // Add more company objects here with their unique details and logos
    // {
    //     name: "Adventure Tours",
    //     location: "Goa",
    //     description: "Your ultimate guide to thrilling adventures across India.",
    //     logo: wanderWiseLogo, // Reusing a logo for example, or import a new one
    // },
    // {
    //     name: "Mountain Escapes",
    //     location: "Himachal Pradesh",
    //     description: "Conquer peaks and explore serene valleys with our expert guides.",
    //     logo: nomadicTrailsLogo, // Reusing a logo
    // },
  ];

  const filteredCompanies = companies.filter(
    (company) =>
      company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Chatbase AI Assistant
  useEffect(() => {
    window.chatbaseConfig = {
      chatbotId: "tuupvZia1Xmy1BRt2Whvq",
    };

    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.defer = true;
    script.setAttribute("chatbotId", "tuupvZia1XXmy1BRt2Whvq"); // Note: You had a typo here, fixed 'X' to 'v'
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Header />
      <div id="home-page-hero"></div>

      {/* Search Input */}
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <input
          type="text"
          placeholder="Search by name or location..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            padding: "10px",
            width: "80%",
            maxWidth: "400px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      <div id="featured-heading-div">
        <h3 id="featured-heading">Featured Companies & Packages</h3>
        <AddPackageRequestButton onClick={handleOpenModal} />
      </div>

      <div className="tour-company-card-div">
        {filteredCompanies.length > 0 ? (
          filteredCompanies.map((company, index) => (
            <TourCompanyCard
              key={index}
              companyLogo={company.logo} // *** CHANGED HERE: Passing company.logo instead of static companyLogo ***
              companyName={company.name}
              companyLocation={company.location}
              companyDescription={company.description}
            />
          ))
        ) : (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            No companies found for "{searchQuery}"
          </p>
        )}
      </div>

      <AddPackageModal show={showModal} handleClose={handleCloseModal} />
    </>
  );
}

export default HomePage;