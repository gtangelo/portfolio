import React from 'react'
import { Link } from 'gatsby'
import Head from "components/Head"
import { Layout } from "components/Layout"
import { Container } from "styled-components/Container"
import { Heading, Subheading } from "styled-components/Title"


const NotFound = () => {
  return (
    <Layout>
      <Head title="Page not found | Gabriel Ting" />
      <Container>
        <Heading>404 Not Found</Heading>
        <Subheading>Click <Link to="/">here</Link> to return back!</Subheading>
      </Container>
    </Layout>
  )
}

export default NotFound
