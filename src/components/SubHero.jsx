import React from 'react'
import "../styles/subhero.scss"

function SubHero() {
  return (
    <div className="subhero">
        <div className="subhero-container container">
            <div className="subhero-list">
                <div className="subhero-list-item">
                    <div className="subhero-list-item-media">
                        <span className="subhero-list-item-media-icon">
                            <i className="bi bi-cpu"></i>
                        </span>
                    </div>
                    <div className="subhero-list-item-content">
                        <span className='subhero-list-item-content-title'>
                            Free Shipping
                        </span>
                        <span className='subhero-list-item-content-description'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </span>
                    </div>
                </div>
                <div className="subhero-list-item">
                    <div className="subhero-list-item-media">
                        <span className="subhero-list-item-media-icon">
                            <i className="bi bi-cpu"></i>
                        </span>
                    </div>
                    <div className="subhero-list-item-content">
                        <span className='subhero-list-item-content-title'>
                            Money Back Guarantee
                        </span>
                        <span className='subhero-list-item-content-description'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </span>
                    </div>
                </div>
                <div className="subhero-list-item">
                    <div className="subhero-list-item-media">
                        <span className="subhero-list-item-media-icon">
                            <i className="bi bi-cpu"></i>
                        </span>
                    </div>
                    <div className="subhero-list-item-content">
                        <span className='subhero-list-item-content-title'>
                            Secure Online Payment
                        </span>
                        <span className='subhero-list-item-content-description'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SubHero