import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from "../components/project-card"

const SecondPage = () => (
  <Layout>
    <SEO title="Projects" />
    <div className="items-center flex flex-col lg:flex-row lg:flex-wrap">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  </Layout>
)

export default SecondPage
