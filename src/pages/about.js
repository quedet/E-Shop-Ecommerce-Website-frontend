import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

function AboutPage(props) {
  return (
    
    <Layout location={props.location}>
        <Seo title="Contact Us" />
        <h1>About Us</h1>
    </Layout>
  )
}

export default AboutPage