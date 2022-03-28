import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

function SignUpPage(props) {
  return (
    
    <Layout location={props.location}>
        <Seo title="Sign Up" />
        <h1>Sign Up</h1>
    </Layout>
  )
}

export default SignUpPage