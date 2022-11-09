import * as React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"
import currentAimPhoto1 from "../images/current-aim-photo-1.jpeg"
import currentAimPhoto2 from "../images/current-aim-photo-2.jpeg"

const CurrentAim = () => {
  const { t } = useTranslation()

  return (
    <div className="border-y-2 py-5 mb-5">
      <p>{t("current-aim")}</p>
      <div className="flex flex-wrap">
        <img
          className="w-full lg:w-1/2 object-cover"
          src={currentAimPhoto2}
          alt="current aim 1"
        />
        <img
          className="w-full lg:w-1/2 object-cover"
          src={currentAimPhoto1}
          alt="current aim 2"
        />
      </div>
      <a
        className="underline inline-block mt-4"
        href="https://send.monobank.ua/jar/5fdCxgctHi"
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
