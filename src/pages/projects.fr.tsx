import React from "react"

import Layout from "../components/layout/fr"
import SEO from "../components/seo"
import ProjectView from "../components/pages/projects-views"

export default () => {
  return (
  <Layout>
    <SEO title="Projects" />
    <ProjectView/>
  </Layout>
)}