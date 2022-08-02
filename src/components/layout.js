import * as React from "react"
import { useI18next, I18nextContext } from "gatsby-plugin-react-i18next"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"

import Header from "./header"
import "@fontsource/roboto"

const links = ["main", "credentials", "contact", "achievements"]

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
            {links.map(link => (
              <Link
                className="mr-5 text-white text-lg"
                // className={headerStyles.navLink}
                to={`${language === "en" ? "/en" : ""}/${
                  link === "main" ? "" : link
                }`}
              >
                {t(link)}
              </Link>
            ))}
          </div>
          <div>
            {languages.map(l => (
              <button
                className={`text-white mr-5 text-xl ${
                  language === l ? "underline" : ""
                } font-${language === l ? "bold" : "normal"}`}
                key={l}
                onClick={e => {
                  e.preventDefault()
                  handleLanguageSwitch(l)
                }}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <div className="pb-6">
          <main>{children}</main>
          <footer className="mt-8 flex justify-between">
            <div className="max-w-[60%] sm:max-w-full">
              © {new Date().getFullYear()} Developed by non-commercial
              organization "Gorynych"
            </div>
            <div className="flex flex-col sm:flex-row">
              <a
                rel="noreferrer"
                href="https://www.facebook.com/groups/way.to.ukraine"
                target="_blank"
                className="mr-0 mb-1 text-white sm:mr-3"
              >
                <b>facebook</b>
              </a>
              <a
                rel="noreferrer"
                href="https://www.instagram.com/way.to.ukraine/"
                target="_blank"
                className="mr-0 mb-1 text-white sm:mr-3"
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
