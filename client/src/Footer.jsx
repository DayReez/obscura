import styles from './Footer.module.css'

function Footer() {
    return (
        <>
        <div className={`container-fluid justify-content-center ${styles['container-fluid']}`}>
            <div className="row py-5">
                <div className="col">
                    <div className={`card border-0 ${styles.card}`}>
                        <div className="card-body text-center">
                            <h2><b>Let’s have a chat!</b></h2>
                            <p className="pl-0 ml-0 mb-5">
                                Find out what we can do for your business or home.
                            </p>
                            <div className="row text-center justify-content-center">
                                <div className="col-auto">
                                    <div className="input-group-lg input-group mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter your e-mail address"
                                            aria-label="Recipient's username"
                                            aria-describedby="button-addon2"
                                        />
                                        <div className="input-group-append">
                                            <button
                                                className="btn btn-success"
                                                type="button"
                                                id="button-addon2"
                                            >
                                                <b>Submit</b>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="mx-0 px-0" />
            <footer className={styles.footer}>
                <div className="row justify-content-around mb-0 pt-5 pb-0">
                    <div className="col-11">
                        <div className="row justify-content-center">
                            <div className="col-md-3 col-12 font-italic align-items-center mt-md-3 mt-4">
                                <h5>
                                    <span>
                                        <img
                                            src="https://extendthemes.com/wp-content/uploads/2018/06/xbox-green-min.png"
                                            className="img-fluid mb-1"
                                            alt="Logo"
                                        />
                                    </span>
                                    <b className="text-dark">
                                        Key<span className="text-muted"> Pass</span>
                                    </b>
                                </h5>
                                <p className={`${styles.social} mt-md-3 mt-2`}>
                                    <span><i className="fa fa-facebook" aria-hidden="true"></i></span>
                                    <span><i className="fa fa-linkedin" aria-hidden="true"></i></span>
                                    <span><i className="fa fa-twitter" aria-hidden="true"></i></span>
                                </p>
                                <small className={`${styles['cursor-pointer']} copy-rights`}>&#9400; 2019 EasyGo Digital Technologies</small>
                                <br />
                                <small>Copyright. All Rights Reserved.</small>
                            </div>
                            <div className="col-md-3 col-12 my-sm-0 mt-5">
                                <ul className="list-unstyled">
                                    <li className={styles['section-title']}>Our Solution</li>
                                    <li>Integrated Security Platform</li>
                                    <li>Core Features</li>
                                    <li>Product Features</li>
                                    <li>Pricing</li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-12 my-sm-0 mt-5">
                                <ul className="list-unstyled">
                                    <li className={styles['section-title']}>Your Needs</li>
                                    <li>Integrated Security Platform</li>
                                    <li>Core Features</li>
                                    <li>Product Features</li>
                                    <li>Pricing</li>
                                </ul>
                            </div>
                            <div className="col-xl-auto col-md-3 col-12 my-sm-0 mt-5">
                                <ul className="list-unstyled">
                                    <li className={styles['section-title']}>Offer</li>
                                    <li>Integrated Security Platform</li>
                                    <li>Core Features</li>
                                    <li>Product Features</li>
                                    <li>Pricing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
        </>
        
    );
}


export default Footer