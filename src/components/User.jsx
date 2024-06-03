import React from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

function User() {
    const params = useParams()
  return (
    <Container>
      i am {params.user}
    </Container>
  )
}

export default User
