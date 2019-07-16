import React from "react"
import Layout from "./index"
import { useStaticQuery, graphql } from "gatsby"
import { Query } from "../../graphqlTypes"
import messages from "../../intl/fr"
export default props => {
  const data: Query = useStaticQuery(graphql`
    query MyQuery {
      allFile(
        filter: {
          name: { eq: "fr" }
          sourceInstanceName: { eq: "naviguation" }
        }
      ) {
        edges {
          node {
            childrenFrJson {
              name
              link
            }
          }
        }
      }
    }
  `)
  const naviguation = data.allFile.edges[0].node.childrenFrJson.map(nav => {
    return {
      name: nav.name,
      link: nav.link,
    }
  })

  return (
    <Layout {...props} locale="fr" title="A traduire" naviguation={naviguation} messages={messages}/>
  )
}
