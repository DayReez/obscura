import { Link } from 'react-router-dom';

// ✨ ADDED companyEmail and companyPhoneNumber to props ✨
function TourCompanyCard({ companyLogo, packageName, companyName, companyLocation, companyDescription, companyEmail, companyPhoneNumber }) {
    const compLocationStyle = {
        marginLeft: '5px',
        color: 'grey'
    };

    const companyNameStyle = {
        color: 'black',
        fontSize: '1em',
    };

    return (
        <Link
            to="/company"
            // ✨ PASSED companyEmail and companyPhoneNumber in the state ✨
            state={{ name: companyName, location: companyLocation, logo: companyLogo, email: companyEmail, phoneNumber: companyPhoneNumber }}
            style={{ textDecoration: 'none', color: 'inherit' }}
        >
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-img-container">
                    <img src={companyLogo} className="card-img-top company-card-logo" alt="company logo" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{packageName}</h5>
                    
                    <p className="card-text" style={companyNameStyle}>{companyName}</p>

                    <div className="card-body-location">
                        <i className="bi bi-geo-alt-fill"></i>
                        <p className="card-text" style={compLocationStyle}>{companyLocation}</p>
                    </div>
                </div>
                <div className="card-body card-body-description">
                    <p>{companyDescription}</p>
                </div>
            </div>
        </Link>
    );
}

export default TourCompanyCard;