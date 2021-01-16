import React from 'react'
import { Layout } from "components/Layout"
import { ProjectContainer } from "styled-components/Container"
import Head from "components/Head"

const Resume = () => {
  return (
    <Layout>
      <Head title="Resume | Gabriel Ting" />
      <ProjectContainer>
        <br />
        <div
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            width: "90%",
            height: 1250,
          }}
        >
          <iframe
            width="100%"
            height="100%"
            title="Resume"
            src="https://gtangelo.github.io/portfolio/resume.pdf"
            type="application/pdf"
          />
        </div>
        <br />
      </ProjectContainer>
    </Layout>
  )
}

export default Resume
