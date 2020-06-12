import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Bonjour</h1>
    <p>Bienvenu sur un site de vente de vêtements.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
