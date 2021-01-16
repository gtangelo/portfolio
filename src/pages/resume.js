import React from 'react'
import { Layout } from "components/Layout"
import { ProjectContainer } from "styled-components/Container"

const Resume = () => {
  return (
    <Layout>
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
            src="../../resume.pdf"
            type="application/pdf"
          />
        </div>
        <br />
      </ProjectContainer>
    </Layout>
  )
}

export default Resume
