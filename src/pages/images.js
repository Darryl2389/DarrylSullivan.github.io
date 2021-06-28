import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"

const Image = () => {
    const data = useStaticQuery(graphql`
    query MyQuery {
        allFile(filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}}) {
          edges {
            node {
              base
              childImageSharp {
                          fluid {
                          ...GatsbyImageSharpFluid
                          }
              }
            }
          }
        }
      }      
`)

return (
    <div className="image-container">
        <h1>View My Projects</h1>
        <div className="image-grid">
            {data.allFile.edges.map((image, key) => (
                <Img key={key}
                    className="image-item"
                    fluid={image.node.childImageSharp.fluid}
                    alt={image.node.base.split('.')[0]}
                    />
            ))}
        </div>
    </div>
    	)
    }

export default Image