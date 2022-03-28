import React from 'react'
import { Link } from 'gatsby'
import "../styles/header.scss"

const HeaderContainer = ({ location }) => {
    return (
        <>
            <div className="header-top grid-4">
                <div className="header-top-navbar-brand">
                    <div className="navbar-brand-item">
                        <Link className="navbrand-item-link" to="/">
                            <span className="navbrand-item-link-icon">
                                <i className="bi bi-github"></i>
                            </span>
                            <span className="navbrand-item-link-text">
                                E-Shop
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="header-top-navbar-search">
                    <form className="header-top-navbar-search-form">
                        <div className="form-item">
                            <input type="email" name='query' placeholder='Search here...' className="form-item-input form-control" />
                        </div>
                        <div className="form-item">
                            <select className='form-item-selct form-control '>
                                <option>Categories</option>
                                <option value="female dress">Female dress</option>
                                <option value="male dress">Male dress</option>
                                <option value="shirt">Shirt</option>
                                <option value="bags">Bags</option>
                                <option value="shoes">Shoes</option>
                            </select>
                        </div>
                        <div className="form-item">
                            <button className="form-item-submit form-control">
                                <span className="form-item-submit-icon">
                                    <i className="bi bi-search"></i>
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="header-top-notification">
                    <div className='header-top-notification-item'>
                        <span className="header-top-notification-item-icon">
                            <i className="bi bi-cart-fill"></i>
                        </span>
                    </div>
                    <div className='header-top-notification-item'>
                        <span className="header-top-notification-item-icon">
                            <i className="bi bi-bell-fill"></i>
                        </span>
                    </div>
                    <div className='header-top-notification-item'>
                        <span className="header-top-notification-item-icon">
                            <i className="bi bi-person-fill"></i>
                        </span>
                    </div>
                </div>
            </div>
            <div className="header-bottom grid-4">
                <div className="header-bottom-collections">
                    <div className="header-bottom-collections-item">
                        <span className="header-bottom-collections-item-icon">
                            <i className="bi bi-list"></i>
                        </span>
                        <span className="header-bottom-collections-item-text">
                            ALL COLLECTIONS
                        </span>
                    </div>
                </div>
                <div className="header-bottom-navbar-menu">
                    <div className="header-bottom-navbar-menu-item">
                        <Link to="/" className={`${location.pathname === "/" ? "active": ""} header-bottom-navbar-menu-item-link`}>
                            <span className="header-bottom-navbar-menu-item-text">Home</span>
                        </Link>
                    </div>
                    <div className="header-bottom-navbar-menu-item">
                        <Link to="/shop" className={`${location.pathname === "/shop" ? "active": ""} header-bottom-navbar-menu-item-link`}>
                            <span className="header-bottom-navbar-menu-item-text">Shop</span>
                        </Link>
                    </div>
                    <div className="header-bottom-navbar-menu-item">
                        <Link to="/blog" className={`${location.pathname === "/blog" ? "active": ""} header-bottom-navbar-menu-item-link`}>
                            <span className="header-bottom-navbar-menu-item-text">Blog</span>
                        </Link>
                    </div>
                    <div className="header-bottom-navbar-menu-item">
                        <Link to="/about" className={`${location.pathname === "/about" ? "active": ""} header-bottom-navbar-menu-item-link`}>
                            <span className="header-bottom-navbar-menu-item-text">About</span>
                        </Link>
                    </div>
                    <div className="header-bottom-navbar-menu-item">
                        <Link to="/contact" className={`${location.pathname === "/contact" ? "active": ""} header-bottom-navbar-menu-item-link`}>
                            <span className="header-bottom-navbar-menu-item-text">Contact</span>
                        </Link>
                    </div>
                </div>
                <div className="header-bottom-registration">
                    <div className="header-bottom-registration-item">
                        <Link to="/signin" className="header-bottom-registration-item-link header-bottom-registration-item-link-signin">
                            <span>Sign In</span>
                        </Link>
                    </div>
                    <div className="header-bottom-registration-item">
                        <Link to="/signup" className="header-bottom-registration-item-link header-bottom-registration-item-link-signup">
                            <span>Sign Up</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderContainer