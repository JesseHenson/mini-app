import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Stepper from "../components/stepper"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Stepper></Stepper>
  </Layout>
)

export default IndexPage
