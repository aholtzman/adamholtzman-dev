import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO title="Adam Holtzman - Developer" />
    <Wrap>
      <h1>adamholtzman.dev</h1>
    </Wrap>
  </Layout>
)

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;

  h1 {
    margin: auto;
  }
`
