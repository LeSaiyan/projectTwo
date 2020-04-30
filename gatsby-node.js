/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions, graphql }) => {
  const products = await graphql(`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/product/" } }) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  products.data.allMarkdownRemark.edges.forEach(edge => {
    const path = edge.node.frontmatter.path
    actions.createPage({
      path: path,
      component: require.resolve("./src/templates/productTemplate.js"),
      context: {
        path: path,
      },
    })
  })

  //requete articles
  const articles = await graphql(`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/articles/" } }) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  articles.data.allMarkdownRemark.edges.forEach(edge => {
    const path = edge.node.frontmatter.path
    actions.createPage({
      path: path,
      component: require.resolve("./src/templates/articleTemplate.js"),
      context: {
        path: path,
      },
    })
  })
}
