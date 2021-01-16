import React from 'react'
import Layout from "components/Layout"
import { graphql } from 'gatsby'
import { ProjectContainer } from "styled-components/Container"
import Particles from "react-particles-js"
import './project.css'
import Head from "components/Head"


export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`

const Project = (props) => {
  return (
    <Layout>
      <Head title={`${props.data.markdownRemark.frontmatter.title} | Gabriel Ting`}/>
      <div className="nav-wave-container">
        <Particles
          params={{
            particles: {
              number: {
                value: 5,
              },
            },
          }}
          className="nav-particles"
        />
        {/* wave created from https://www.shapedivider.app/ */}
        <div class="custom-shape-divider-bottom-1610757725">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <br />
      <ProjectContainer>
        <div
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        />
      </ProjectContainer>
    </Layout>
  )
}

export default Project
