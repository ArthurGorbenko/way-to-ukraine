import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import * as styles from "./footer.module.css"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div style={{ background: "black" }}>
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
