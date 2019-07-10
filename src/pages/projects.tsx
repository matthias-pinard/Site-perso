import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from "../components/project-card"
import { Query } from "../graphqlTypes"

import ProjectView from "../components/pages/projects-views"

export default (query: {data: Query}) => {
  return (
  <Layout>
    <SEO title="Projects" />
    <ProjectView/>
  </Layout>
)}