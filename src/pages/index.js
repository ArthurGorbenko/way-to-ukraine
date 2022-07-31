import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"
import Credentials from "../layouts/credentials"
import CurrentAim from "../layouts/currentAim"

const IndexPage = props => {
  const { t } = useTranslation()

  return (
    <Layout>
      <Seo title="Way to Ukraine" />
      <p>{t("intro")}</p>
      <p>{t("explanation")}</p>
      <p>{t("aim")}</p>
      <p>{t("help")}</p>
      <CurrentAim />
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

export default IndexPage
