import React from "react"
import Layout from "../../components/Layout"
import { Link } from "gatsby"

export const query = graphql`
  query MyQueryBlog {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "//articles/" } }) {
      edges {
        node {
          frontmatter {
            description
            image
            title
            path
          }
        }
      }
    }
  }
`

const Blog = ({ data }) => {
  return (
    <Layout>
      <table>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Preview</th>
        </tr>
        {data.allMarkdownRemark.edges.map(article => {
          return (
            <tr>
              <td>{article.node.frontmatter.title}</td>
              <td>{article.node.frontmatter.description}</td>
              <td>
                <img src={article.node.frontmatter.image} alt="" />
              </td>
              <td>
                <Link to={"/" + article.node.frontmatter.path}>Détails</Link>
              </td>
            </tr>
          )
        })}
      </table>
    </Layout>
  )
}

export default Blog
