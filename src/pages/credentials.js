import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import Credentials from "../layouts/credentials"

const CredentialsPage = props => {
  return (
    <Layout>
      <Seo title="Way to Ukraine" />
      <Credentials />
    </Layout>
  )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`

export default CredentialsPage
