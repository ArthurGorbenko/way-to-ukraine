import * as React from "react"
import { Link, useI18next, I18nextContext } from "gatsby-plugin-react-i18next"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import * as styles from "./footer.module.css"
import * as headerStyles from "./header.module.css"
import "./layout.css"
import "@fontsource/roboto"
import { useTranslation } from "gatsby-plugin-react-i18next"

import Header from "./header"

const Layout = ({ children }) => {
  const { t } = useTranslation()
  const { languages, changeLanguage } = useI18next()
  const { language } = React.useContext(I18nextContext)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const handleLanguageSwitch = l => {
    changeLanguage(l)
  }

  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex justify-between pt-5 flex-wrap">
          <div className="flex flex-wrap">
            <a className={headerStyles.navLink} href="/">
              {t("main")}
            </a>
            <a className={headerStyles.navLink} href="/achivements">
              {t("achievements")}
            </a>
            <a className={headerStyles.navLink} href="/credentials">
              {t("credentials")}
            </a>
            <a className={headerStyles.navLink} href="/contact">
              {t("contact")}
            </a>
          </div>
          <div>
            {languages.map(l => (
              <a
                style={{
                  color: "white",
                  marginRight: 20,
                  fontSize: 20,
                  paddingTop: 20,
                  textDecoration: language === l ? "underline" : "none",
                  fontWeight: language === l ? 700 : 400,
                }}
                key={l}
                href="#"
                onClick={e => {
                  e.preventDefault()
                  handleLanguageSwitch(l)
                }}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <div className="pb-6">
          <main>{children}</main>
          <footer
            style={{
              marginTop: `2rem`,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className={styles.date}>
              © {new Date().getFullYear()} Developed by non-commercial
              organization "Gorynych"
            </div>
            <div className={styles.wrapper}>
              <a
                rel="noreferrer"
                href="https://www.facebook.com/groups/way.to.ukraine"
                target="_blank"
                className={styles.link}
              >
                <b>facebook</b>
              </a>
              <a
                rel="noreferrer"
                href="https://www.instagram.com/way.to.ukraine/"
                target="_blank"
                className={styles.link}
              >
                <b>instagram</b>
              </a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
