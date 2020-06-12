import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

// export default ({ data }) => {
//   return (
//     <div>
//       <h1>{data.markdownRemark.frontmatter.title}</h1>
//     </div>
//   )
// }

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div>
          <img src={data.markdownRemark.frontmatter.image} alt="" />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        description
        image
      }
    }
  }
`
