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
        <a className="underline" href="mailto:melnykov_sergiy@ukr.net">
          melnykov_sergiy@ukr.net
        </a>
      </p>
      <p>
        {t("contact.telegram")}
        <a className="underline" href="#">
          @melnykov1508
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
