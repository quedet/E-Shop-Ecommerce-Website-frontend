/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import FooterContainer from "./Footer"
import HeaderContainer from "./Header"

const Layout = ({ children, location }) => {
  return (
    <div className="app">
        <div className="app-container">
            <header className="app-header">
                <div className="header-container container">
                    <HeaderContainer location={location} />
                </div>
            </header>
            <main className="app-main-content">
                <div className="main-content-container container">
                    {children}
                </div>
            </main>
            <footer className="app-footer">
                <FooterContainer />
            </footer>
        </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
