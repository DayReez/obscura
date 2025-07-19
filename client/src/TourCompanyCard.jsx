function TourCompanyCard({companyLogo, companyName, companyLocation, companyDescription}) { 

    const compLocationStyle = {
        marginLeft: '5px'
    };

    return (
        
        <div className="card" style={{width: "18rem"}}>
            <div className="card-img-container">
                <img src={companyLogo} className="card-img-top company-card-logo" alt="company logo" />
            </div>
            <div className="card-body">
                <h5 className="card-title">{companyName}</h5>
                <div className="card-body-location">
                    <i class="bi bi-geo-alt-fill"></i>
                    <p className="card-text" style={compLocationStyle}>{companyLocation}</p>
                </div>
            </div>
            <div className="card-body card-body-description">
                <p>{companyDescription}</p>
            </div>
        </div>

    );

}

export default TourCompanyCard