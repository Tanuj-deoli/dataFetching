import React from 'react'
import { memo } from 'react'
import { Container } from 'react-bootstrap'

function CallBack(props) {
    console.log("callback rendering")
  return (
    <Container>
      <p>callback value is {props.adjective}</p>
    </Container>
  )
}

export default memo(CallBack)
