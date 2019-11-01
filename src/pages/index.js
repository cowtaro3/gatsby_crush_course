import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Menu from "../components/menu"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Menu />
    <div>
    <h1>Welcome to my website</h1>
    <p>This is a sample site for the Gatsby crash course</p>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
