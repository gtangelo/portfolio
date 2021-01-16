import React from 'react'
import { Layout } from "components/Layout"
import { graphql } from 'gatsby'
import { ProjectContainer } from "styled-components/Container"
import './project.css'
import Head from "components/Head"


export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        github
        deploy
      }
      html
    }
  }
`

const Project = (props) => {
  return (
    <Layout>
      <Head
        title={`${props.data.markdownRemark.frontmatter.title} | Gabriel Ting`}
      />
      <ProjectContainer>
        <h1>{props.data.markdownRemark.frontmatter.title}</h1>
        {props.data.markdownRemark.frontmatter.github !== "" && (
          <button>Github</button>
        )}
        {props.data.markdownRemark.frontmatter.deploy !== "" && (
          <button>Deploy</button>
        )}
        <div
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        />
      </ProjectContainer>
    </Layout>
  )
}

export default Project
