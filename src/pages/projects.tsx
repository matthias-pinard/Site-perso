import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from "../components/project-card"
import { Query } from "../graphqlTypes"

export default (query: {data: Query}) => {
  return (
  <Layout>
    <SEO title="Projects" />
    <div className="items-center flex flex-col lg:flex-row lg:flex-wrap">
      {query.data.allProjetsJson.edges.map((project, i) => 
        <ProjectCard
          name={project.node.name}
          description={project.node.description}
          image={project.node.image_path.publicURL}
          key={i}
        />
      )}
    </div>
  </Layout>
)}

export const query = graphql`
query {
  allProjetsJson {
    edges {
      node {
        name
        description
        image_path {
          publicURL
        }
      }
    }
  }
}
`
