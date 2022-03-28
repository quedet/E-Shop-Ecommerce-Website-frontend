import React from "react";
import PropTypes from 'prop-types'
import "../styles/footer.scss"

const FooterContainer = ({ title, description }) => {
    return (
        <div className="footer-container container">
            <section className="footer-container-section footer-container-section-grid-6 footer-container-top">
                <div className="footer-item footer-item-presentation">
                    <div className="footer-item-title">
                        <div className="footer-item-title-text">
                            <span>About Us</span>
                        </div>
                    </div>
                    <div className="footer-item-content">
                        <p className="footer-item-content-text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, deserunt culpa! Officia facere, libero pariatur ratione maiores molestiae nostrum, quam asperiores sit aliquid quia illum, praesentium molestias.
                        </p>
                    </div>
                </div>
                <div className="footer-item footer-item-information">
                    <div className="footer-item-title">
                        <div className="footer-item-title-text">
                            <span>Information</span>
                        </div>
                    </div>
                    <div className="footer-item-content">
                        <div className="footer-item-content-list">
                            <div className="footer-item-content-list-item">
                                <span>About us</span>
                            </div>
                            <div className="footer-item-content-list-item">
                                <span>Blog</span>
                            </div>
                            <div className="footer-item-content-list-item">
                                <span>Check out</span>
                            </div>
                            <div className="footer-item-content-list-item">
                                <span>Contact</span>
                            </div>
                            <div className="footer-item-content-list-item">
                                <span>Service</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-item footer-item-account">
                    <div className="footer-item-title">
                        <div className="footer-item-title-text">
                            <span>My Account</span>
                        </div>
                    </div>
                    <div className="footer-item-content">
                        <div className="footer-item-content-list">
                            <div className="footer-item-content-list-item">
                                <span>About us</span>
                            </div>
                            <div className="footer-item-content-list-item">
                                <span>Blog</span>
                            </div>
                            <div className="footer-item-content-list-item">
                                <span>Check out</span>
                            </div>
                            <div className="footer-item-content-list-item">
                                <span>Contact</span>
                            </div>
                            <div className="footer-item-content-list-item">
                                <span>Service</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-item footer-item-categories">
                    <div className="footer-item-title">
                        <div className="footer-item-title-text">
                            <span>Categories</span>
                        </div>
                    </div>
                    <div className="footer-item-content">
                        <div className="footer-item-content-list">
                            <div className="footer-item-content-list-item">
                                <span>About us</span>
                            </div>
                            <div className="footer-item-content-list-item">
                                <span>Blog</span>
                            </div>
                            <div className="footer-item-content-list-item">
                                <span>Check out</span>
                            </div>
                            <div className="footer-item-content-list-item">
                                <span>Contact</span>
                            </div>
                            <div className="footer-item-content-list-item">
                                <span>Service</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-item footer-item-subscribe">
                    <div className="footer-item-title">
                        <div className="footer-item-title-text">
                            <span>Subscribe us</span>
                        </div>
                    </div>
                    <div className="footer-item-content">
                        <div className="footer-item-content-list">
                            <div className="footer-item-content-list-item">
                                <span>Sign up and get a voucher of worth $250.00</span>
                            </div>
                            <div className="footer-item-content-list-item">
                                <form className="footer-item-content-form">
                                    <div className="form-item">
                                        <input type="email" name="email" id="email" placeholder="Email address..."  className="form-item-input"/>
                                    </div>
                                    <div className="form-item">
                                        <button type="submit" className="form-item-submit" >
                                            <i className="bi bi-arrow-right"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="footer-container-line-break" />

            <section className="footer-container-section footer-container-section-grid-4 footer-container-middle">
                <div className="footer-item">
                    <div className="footer-item-content footer-item-content-flex">
                        <div className="footer-item-content-left footer-item-content-list">
                            <div className="footer-item-content-left-item">
                                <span className="footer-item-content-left-item-icon">
                                    <i class="bi bi-headset"></i>
                                </span>
                            </div>
                        </div>
                        <div className="footer-item-content-right footer-item-content-list">
                            <div className="footer-item-content-list-item">
                                <span className="footer-item-content-list-item--service">CALL US 24/7</span>
                            </div>
                            <div className="footer-item-content-list-item">
                                <span className="footer-item-content-list-item--number">(1800)-88-66-991</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-item">
                    <div className="footer-item-content">
                        <div className="footer-item-content-list">
                            <div className="footer-item-content-list-item">
                                <span>9066 Green Lake Drive Chevy Chase, MD 20815</span>
                            </div>
                            <div className="footer-item-content-list-item">
                                <span>tanvirahmed8697@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-item">
                    <div className="footer-item-content">
                        <div className="footer-item-content-list">
                            <div className="footer-item-content-list-item">
                                <span>FOLLOW US</span>
                            </div>
                            <div className="footer-item-content-list-item">
                                <span className="footer-item-content-list-item-icon">
                                    <i className="bi bi-facebook"></i>
                                </span>
                                <span className="footer-item-content-list-item-icon">
                                    <i className="bi bi-youtube"></i>
                                </span>
                                <span className="footer-item-content-list-item-icon">
                                    <i class="bi bi-instagram"></i>
                                </span>
                                <span className="footer-item-content-list-item-icon">
                                    <i class="bi bi-behance"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-item">
                    <div className="footer-item-content">
                        <div className="footer-item-content-list">
                            <div className="footer-item-content-list-item">
                                <span>PAYMENTS</span>
                            </div>
                            <div className="footer-item-content-list-item">
                                <span className="footer-item-content-list-item-icon">
                                    <i className="bi bi-facebook"></i>
                                </span>
                                <span className="footer-item-content-list-item-icon">
                                    <i className="bi bi-youtube"></i>
                                </span>
                                <span className="footer-item-content-list-item-icon">
                                    <i class="bi bi-instagram"></i>
                                </span>
                                <span className="footer-item-content-list-item-icon">
                                    <i class="bi bi-behance"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="footer-container-line-break" />
            
            <section className="footer-container-section footer-container-bottom">
                <div className="footer-item">
                    <div className="footer-item-content">
                        <div className="footer-item-content-list">
                            <p>&copy; 2021 Emexso. All rights Reserved By <strong>TanvirAhmed</strong></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

FooterContainer.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}

export default FooterContainer