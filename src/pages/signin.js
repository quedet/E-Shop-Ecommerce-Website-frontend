import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

function SignInPage(props) {
  return (
    
    <Layout location={props.location}>
        <Seo title="Sign In" />
        <h1>Sign In</h1>
    </Layout>
  )
}

export default SignInPage