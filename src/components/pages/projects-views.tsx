import React from "react"
import ProjectCard from "../project-card"
import { useStaticQuery, graphql } from "gatsby"
import { Query } from "../../graphqlTypes"

export default () => {
  const data: Query = useStaticQuery(
    graphql`
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
  )
  return (
    <div className="items-center flex flex-col lg:flex-row lg:flex-wrap">
      {data.allProjetsJson.edges.map((project, i) => (
        <ProjectCard
          name={project.node.name}
          description={project.node.description}
          image={project.node.image_path.publicURL}
          key={i}
        />
      ))}
    </div>
  )
}
