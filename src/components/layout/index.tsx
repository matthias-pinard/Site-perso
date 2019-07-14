/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "../header"
import { IntlProvider } from "react-intl"

const Layout = props => (
  <IntlProvider locale={props.locale} messages={props.messages}>
    <Header siteTitle={props.title} navigation={props.naviguation} />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
      }}
    >
      <main>{props.children}</main>
      <footer></footer>
    </div>
  </IntlProvider>
)

export default Layout
