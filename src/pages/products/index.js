import React, { Component } from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import { Link } from "gatsby"
import IdentityModal, {
  useIdentityContext,
} from "react-netlify-identity-widget"

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "//products/" } }) {
      edges {
        node {
          frontmatter {
            description
            image
            price
            title
            path
          }
        }
      }
    }
  }
`

const Products = ({ data }) => {
  const identity = useIdentityContext()
  //state local
  const [dialog, setDialog] = React.useState(false)

  console.log(identity.user)

  const isLoggedIn = identity && identity.isLoggedIn
  return (
    <Layout>
      <table>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Description</th>
          <th>Preview</th>
        </tr>
        {data.allMarkdownRemark.edges.map(product => {
          return (
            <tr>
              <td>{product.node.frontmatter.title}</td>
              <td>{product.node.frontmatter.price} €</td>
              <td>{product.node.frontmatter.description}</td>
              <td>
                <img src={product.node.frontmatter.image} alt="" />
              </td>
              <td>
                <button
                  class="snipcart-add-item"
                  data-item-id={product.node.frontmatter.title}
                  data-item-price={product.node.frontmatter.price}
                  data-item-url="https://keen-yonath-4ea4f5.netlify.app/products"
                  data-item-description={product.node.frontmatter.description}
                  data-item-image={product.node.frontmatter.image}
                  data-item-name={product.node.frontmatter.title}
                >
                  Add to cart
                </button>
                <Link to={"/" + product.node.frontmatter.path}>Détails</Link>
              </td>
            </tr>
          )
        })}
      </table>
    </Layout>
  )
}

Products.propTypes = {}

export default Products
