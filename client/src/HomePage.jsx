import Header from './Header.jsx'
import HomePageHero from './HomePageHero.jsx';
import TourCompanyCard from './TourCompanyCard.jsx'
import companyLogo from './assets/react.svg';

function HomePage() {

    return (
        <>
            <Header />
            <HomePageHero />
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
            
        </>
        
    );

}

export default HomePage