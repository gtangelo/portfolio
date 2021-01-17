import React from 'react'
import { Layout } from "components/Layout"
import { graphql } from 'gatsby'
import { ProjectContainer, ButtonContainer } from "styled-components/Container"
import './project.css'
import Head from "components/Head"
import { Heading } from "styled-components/Title"


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
        <Heading>{props.data.markdownRemark.frontmatter.title}</Heading>
        <div className="btn-container">
          {props.data.markdownRemark.frontmatter.github !== "" && (
            <div className="github-btn">
              <a
                href={props.data.markdownRemark.frontmatter.github}
                target="_blank"
              >
                Github
              </a>
            </div>
          )}
          {props.data.markdownRemark.frontmatter.deploy !== "" && (
            <div className="deploy-btn">
              <a
                href={props.data.markdownRemark.frontmatter.deploy}
                target="_blank"
              >
                Deploy
              </a>
            </div>
          )}
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        />
      </ProjectContainer>
    </Layout>
  )
}

export default Project
