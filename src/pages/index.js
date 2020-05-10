import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default () => (
  <Layout>
    <SEO title='Adam Holtzman - Developer' />
    <Wrap>
      <div css={`display: flex; height: 90vh;`}>

        <div css={`width: 100%; display: flex; flex-direction: column; margin: 2rem 0 0 2rem`}>
          <div css={`background-color:white; flex: 2; margin: 0 1rem 1rem 0; border: .5px solid silver;`}></div>
          <div css={`background-color:white; flex: 1; margin: 1rem 1rem 0 0; border: .5px solid silver;`}></div>
        </div>
        <div css={`background-color:white; width: 100%; margin: 2rem 2rem 0 1rem;border: .5px solid silver;`}></div>
      </div>

      <Title>
        <h1>projects & experiments</h1>
        <h2>adam holtzman.dev</h2>
      </Title>
    </Wrap>
  </Layout>
)

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgba(0,0,255,.03);
  overflow: scroll;
  color: grey;

  h1, h2 {
    margin: auto 0;
  }

  @media(max-width: 768px) {

  }
`
const Title = styled.div`
  background-color:white;
  padding: 1rem;
  margin: 2rem;
  border: .5px solid silver;
  display: flex;
  justify-content: space-between;

  @media(max-width: 768px) {
    flex-direction: column;

    h1, h2 {
      font-size: 18px;
    }
  }
`
