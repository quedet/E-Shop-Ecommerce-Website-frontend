import React from 'react'
import "../styles/hero.scss"
import { GatsbyImage } from 'gatsby-plugin-image'
import { graphql, Link, StaticQuery } from 'gatsby'

function Hero() {
  return (
    <div className="hero">
        <div className="hero-container container grid-4">
            <div className="hero-section-left">
                <div className="hero-section-left-list">
                    <div className="hero-section-left-list-item">
                        <span className="hero-section-left-list-item-text">All</span>
                    </div>
                    <div className="hero-section-left-list-item">
                        <span className="hero-section-left-list-item-text">Popular Products</span>
                    </div>
                    <div className="hero-section-left-list-item">
                        <span className="hero-section-left-list-item-text">New Arrivals</span>
                    </div>
                    <div className="hero-section-left-list-item">
                        <span className="hero-section-left-list-item-text">Shirt</span>
                    </div>
                    <div className="hero-section-left-list-item">
                        <span className="hero-section-left-list-item-text">Shoes</span>
                    </div>
                    <div className="hero-section-left-list-item">
                        <span className="hero-section-left-list-item-text">Bags</span>
                    </div>
                    <div className="hero-section-left-list-item">
                        <span className="hero-section-left-list-item-text">Zippar</span>
                    </div>
                </div>
            </div>
            <div className="hero-section-right">
                <StaticQuery query={graphql`
                    query MyQuery {
                        imageSharp(id: {eq: "45394a0d-4d5d-528e-9cd0-3f2211eb559f"}) {
                          id
                          gatsbyImageData
                        }
                    }
                `}

                render={(data) => (
                    <GatsbyImage className="hero-section-right-media" image={data.imageSharp.gatsbyImageData} />
                )} />
                <div className="hero-section-right-media-overlay">
                    <div className="hero-carousel">
                        <div className="hero-carousel-subtitle">
                            <span className="hero-carousel-subtitle-text">
                                30% off for all items
                            </span>
                        </div>
                        <div className="hero-carousel-title">
                            <span className="hero-carousel-title-text">
                                Get All Original Products
                            </span>
                        </div>
                        <div className="hero-carousel-action">
                            <button className="hero-carousel-button">
                                <Link to='/shop' className="hero-carousel-button-link">
                                    <span className="hero-carousel-button-link-text">
                                        Shop Now
                                    </span>
                                    <span className="hero-carousel-button-link-icon">
                                        <i className="bi bi-arrow-right"></i>
                                    </span>
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero