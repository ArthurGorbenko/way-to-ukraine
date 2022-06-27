import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"

const IndexPage = props => {
  const { t } = useTranslation()

  return (
    <Layout>
      <Seo title="Contact" />
      <p>
        {t("contact.email")}
        <a className="underline" href="mailto:gorbenkoartur.ur@gmail.com">
          gorbenkoartur.ur@gmail.com
        </a>
      </p>
      <p>
        {t("contact.telegram")}
        <a className="underline" href="tel:+380 50 474 0414">
          +380 50 474 0414
        </a>
      </p>
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
