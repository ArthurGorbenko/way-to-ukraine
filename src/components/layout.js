import * as React from "react"
import { Link, useI18next, I18nextContext } from "gatsby-plugin-react-i18next"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import * as styles from "./footer.module.css"
import "@fontsource/roboto"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
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
    <div style={{ background: "black" }}>
      <div
        style={{
          display: "flex",
          paddingLeft: "calc((100vw - 920px)/2)",
        }}
      >
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
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
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
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
