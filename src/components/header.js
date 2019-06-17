import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../css/global.css"

const Header = ({ siteTitle, navigation }) => (
  <header className="bg-blue-500 flex">
    <ul className="flex text-white m-4">
      <li className="mr-6">
        <Link to="/">{siteTitle}</Link>
      </li>
      {navigation.map(elem => (
        <li className="mr-6">
          <Link to={elem.link}>{elem.name}</Link>
        </li>
      ))}
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  navigation: PropTypes.array,
}

Header.defaultProps = {
  siteTitle: ``,
  navigation: [],
}

export default Header
