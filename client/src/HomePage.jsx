import Header from './Header.jsx'
import HomePageHero from './HomePageHero.jsx';
import TourCompanyCard from './TourCompanyCard.jsx'
import companyLogo from './assets/react.svg';
// import Footer from './Footer.jsx';

function HomePage() {

    return (
        <>
            <Header />
            <HomePageHero />
            
            <h2 id="featured-heading">Featured Companies & packages</h2>
            <div className="tour-company-card-div">
                <TourCompanyCard
                    companyLogo={companyLogo}
                    companyName="Boom" 
                    companyLocation="Kerala"
                    companyDescription = "hello"
                />
                <TourCompanyCard
                    companyLogo={companyLogo}
                    companyName="Boom" 
                    companyLocation="Kerala"
                    companyDescription = "hello"
                />
                <TourCompanyCard
                    companyLogo={companyLogo}
                    companyName="Boom" 
                    companyLocation="Kerala"
                    companyDescription = "hello"
                />
                <TourCompanyCard
                    companyLogo={companyLogo}
                    companyName="Boom" 
                    companyLocation="Kerala"
                    companyDescription = "hello"
                />
            </div>
            {/* <Footer /> */}

            
        </>
        
    );

}

export default HomePage