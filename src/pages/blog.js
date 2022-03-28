import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

function BlogPage(props) {
  return (
    
    <Layout location={props.location}>
        <Seo title="Contact Us" />
        <h1>Blog Page</h1>
    </Layout>
  )
}

export default BlogPage