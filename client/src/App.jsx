// import { useState } from 'react'
import TourCompanyCard from './TourCompanyCard.jsx';
import companyLogo from './assets/react.svg';
import LoginPage from './LoginPage.jsx';
import RegisterPage from './RegisterPage.jsx';
import HomePage from './HomePage.jsx';

function App() {

  return(
    
    // <div style={{display: 'flex', gap: '1rem'}}>
    //   {/* <TourCompanyCard
    //   companyLogo={companyLogo}
    //   companyName="Angelina Rose" 
    //   companyLocation="Kozhikode"
    //   companyDescription = "Discover unforgettable journeys with us — where every trip becomes a story worth telling."
    //   /> */}

    //   {/* <TourCompanyCard
    //   companyLogo={companyLogo}
    //   companyName="Boom" 
    //   companyLocation="Kerala"
    //   companyDescription = "hello"
      
    //   />

    //   <TourCompanyCard
    //   companyLogo={companyLogo}
    //   companyName="Boom" 
    //   companyLocation="Kerala"
    //   companyDescription = "hello"
    //   /> */}

    // </div>
    <HomePage />
    // <LoginPage />
    // <RegisterPage />

  );
}

export default App
