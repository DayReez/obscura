import { useState, useEffect } from 'react';
import AddPackageModal from './AddPackageModal';
import Header from './Header.jsx';
import TourCompanyCard from './TourCompanyCard.jsx';
import AddPackageRequestButton from './AddPackageRequestButton.jsx';

// Import individual company logos
import wanderWiseLogo from './assets/MUNNAR.jpg';
import nomadicTrailsLogo from './assets/Milford-Sound-Fiordland-National-Park.webp';
import globeTrekLogo from './assets/istockphoto-1183878653-612x612.jpg';
import azureHorizonsLogo from './assets/Intrepid-Travel-Iceland_Golden-Circle_jokulsarlon-glacier-lagoon-boat-tour_Ryan-Bolton7342.jpg';

function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const companies = [
    {
      name: "WanderWise",
      location: "Kerala",
      description: "At WanderWise, we craft unforgettable adventures. Specializing in curated travel experiences for families, solo travelers, and couples.",
      logo: wanderWiseLogo,
      email: "contact@wanderwise.com",
      phoneNumber: "+91 98765 43210",
      packageName: "Munnar Green Escape", // Added packageName
      suggestions: [
        { id: 1, title: 'Munnar Tea Plantation Tour', description: 'Explore the lush tea gardens and enjoy the serene hills.', shortDescription: 'Tea, hills, and tranquility.', price: '₹15,000' },
        { id: 2, title: 'Alleppey Backwater Cruise', description: 'Experience the unique houseboat stays in the backwaters of Alleppey.', shortDescription: 'Houseboats and serene waters.', price: '₹22,000' },
      ]
    },
    {
      name: "Nomadic Trails",
      location: "Karnataka",
      description: "Nomadic Trails connects wanderers with the hidden gems of the world. Tailor-made packages for stress-free travel.",
      logo: nomadicTrailsLogo,
      email: "info@nomadictrails.in",
      phoneNumber: "+91 91234 56789",
      packageName: "Hampi Royal Trails", // Added packageName
      suggestions: [
        { id: 3, title: 'Hampi Heritage Exploration', description: 'Discover the ancient ruins and rich history of Hampi.', shortDescription: 'Ancient ruins and history.', price: '₹18,500' },
        { id: 4, title: 'Coorg Coffee & Spice Tour', description: 'Immerse yourself in the aromatic coffee and spice plantations of Coorg.', shortDescription: 'Coffee, spices, and nature.', price: '₹16,000' },
      ]
    },
    {
      name: "GlobeTrek Explorers",
      location: "Kerala",
      description: "GlobeTrek Explorers offers personalized itineraries, cultural immersion tours, and eco-friendly travel options.",
      logo: globeTrekLogo,
      email: "support@globetrek.co",
      phoneNumber: "+91 87654 32109",
      packageName: "Kerala Cultural Immersion", // Added packageName
      suggestions: [
        { id: 5, title: 'Fort Kochi Art & History Walk', description: 'A guided tour through the colonial streets and art galleries of Fort Kochi.', shortDescription: 'Art, history, and culture.', price: '₹12,000' },
        { id: 6, title: 'Thekkady Wildlife Safari', description: 'Venture into Periyar National Park for a thrilling wildlife experience.', shortDescription: 'Wildlife and nature.', price: '₹19,500' },
      ]
    },
    {
      name: "Azure Horizons",
      location: "Tamil Nadu",
      description: "Azure Horizons is your boutique travel agency for luxurious, offbeat, and accessible travel experiences.",
      logo: azureHorizonsLogo,
      email: "hello@azurehorizons.org",
      phoneNumber: "+91 76543 21098",
      packageName: "Chennai Coastal Getaway", // Added packageName
      suggestions: [
        { id: 7, title: 'Mahabalipuram Temple Tour', description: 'Explore the UNESCO World Heritage sites and ancient rock-cut temples.', shortDescription: 'Temples and ancient architecture.', price: '₹14,000' },
        { id: 8, title: 'Pondicherry French Quarter Charm', description: 'Discover the unique blend of French colonial heritage and spiritual vibes.', shortDescription: 'French charm and spirituality.', price: '₹17,500' },
      ]
    },
  ];

  const filteredCompanies = companies.filter(
    (company) =>
      company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (company.packageName && company.packageName.toLowerCase().includes(searchQuery.toLowerCase())) // Also search by packageName
  );

  useEffect(() => {
    window.chatbaseConfig = {
      chatbotId: "tuupvZia1Xmy1BRt2Whvq",
    };

    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.defer = true;
    script.setAttribute("chatbotId", "tuupvZia1XXmy1BRt2Whvq");
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
          placeholder="Search by name, location, or package..."
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
              companyLogo={company.logo}
              packageName={company.packageName} // Pass packageName
              companyName={company.name}
              companyLocation={company.location}
              companyDescription={company.description}
              companySuggestions={company.suggestions} // Pass companySuggestions
              companyEmail={company.email} // Pass companyEmail
              companyPhoneNumber={company.phoneNumber} // Pass companyPhoneNumber
            />
          ))
        ) : (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            No companies or packages found for "{searchQuery}"
          </p>
        )}
      </div>

      <AddPackageModal show={showModal} handleClose={handleCloseModal} />
    </>
  );
}

export default HomePage;