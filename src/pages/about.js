import React from 'react'
import { Layout } from 'components/Layout'
import Container from 'styled-components/Container'
import me from 'assets/me.jpg'
import './about.css'
import Head from "components/Head"
import { Heading } from "styled-components/Title"


const About = () => {
  return (
    <Layout>
      <Head title="About | Gabriel Ting" />
      <Container>
        <div id="me-section">
          <img className="me" alt="me" src={me} width="200px" />
          <div style={{ maxWidth: 800 }}>
            <Heading>Hi, I'm Gabriel</Heading>
            <p>
              I am currently a penultimate student studying a Bachelor of
              Computer Science degree. I am a well versed individual, striving
              to complete tasks beyond expectations. Through my passion in
              coding, I strive to become a web developer as a potential career.
            </p>
            <br />
            <p>
              Apart from my academic achievements, I actively engage in a wide
              range of personal and professional development opportunities
              throughout my study at UNSW. Currently, I am the Security Society
              Projects Director and part of the Enactus UNSW IT Subcommittee
              which aims to develop and foster various skills including
              communication, leadership and technical abilities.
            </p>
            <br />
            <p>
              Otherwise, in my spare time, I am passionate to explore further what
              computer science has to offer by watching various videos on different
              programming topics on the internet. Furthermore, I love exploring
              new places around Sydney, whether it be hiking or trying new restaurants
              to eat at!
            </p>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default About
