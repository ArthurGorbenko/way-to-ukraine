import * as React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"
import currentAimPhoto from "../images/current-aim-photo.jpeg"

const CurrentAim = () => {
  const { t } = useTranslation()

  return (
    <div className="border-y-2 py-5 mb-5">
      <p>{t("current-aim")}</p>
      <img src={currentAimPhoto} alt="current aim" />
      <a
        className="underline"
        href="https://send.monobank.ua/jar/RtKwfh5Kn"
        target="blank"
      >
        {t("current-aim.link")}
      </a>
    </div>
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

export default CurrentAim
