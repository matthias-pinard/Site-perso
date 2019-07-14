import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout/fr"
import Image from "../components/image"
import SEO from "../components/seo"

import "../css/global.css"
import { Query } from "../graphqlTypes"

import ProjectView from "../components/pages/projects-views"
import ContactForm from "../components/pages/contact-form"

const IndexPage = (query: { data: Query }) => (
  <Layout>
    <SEO title="Home" />
    <h1>A propos</h1>
    <div
      dangerouslySetInnerHTML={{
        __html: query.data.file.childMarkdownRemark.html,
      }}
    ></div>

    <h1 className="pt-12"> Mes projets</h1>
    <ProjectView/>

    <h1 className="pt-12"> Me contacter </h1>
    <ContactForm/>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    file(name: { eq: "test" }) {
      childMarkdownRemark {
        html
      }
    }
  }
`
