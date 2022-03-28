import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

function ContactPage(props) {
  return (
    
    <Layout location={props.location}>
        <Seo title="Contact Us" />
        <h1>Contact Us</h1>
    </Layout>
  )
}

export default ContactPage