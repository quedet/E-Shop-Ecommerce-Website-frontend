import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

function ShopPage(props) {
  return (
    
    <Layout location={props.location}>
        <Seo title="Contact Us" />
        <h1>Shop Page</h1>
    </Layout>
  )
}

export default ShopPage