import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header className="mb-[1.45rem]">
    <div className="flex justify-between items-center">
      <h1 className="m-0 text-6xl font-bold">
        <Link to="/" className="decoration-none text-white">
          {siteTitle}
        </Link>
      </h1>
      <StaticImage
        src="../images/LGFINALE.png"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
      />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
