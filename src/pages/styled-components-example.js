import React from "react"
import styled from "styled-components"

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Avatar = styled.img`
  flex: 0 0 96px;
  width: 96px;
  height: 96px;
  margin: 0;
`

const Username = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
`

const User = props => (
  <>
    <Avatar src={props.avatar} alt={props.username} />
    <Username>{props.username}</Username>
  </>
)

export default () => (
  <Container>
    <h1>About Styled Components</h1>
    <p>Styled Components is cool</p>
    <User
      username="Jane Doe"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
    />
    <User
      username="Bob Smith"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
    />
  </Container>
)