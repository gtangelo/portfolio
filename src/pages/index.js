import React from "react"
import { EmptyLayout } from "components/Layout"
import "./index.css"
import { Container } from "styled-components/Container"
import { projects, blogs } from "../data"
import Particles from "react-particles-js";
import { Heading, Subheading, HeroDescription } from "styled-components/Title"
import Card from "components/Card";
import Head from "components/Head";

const Home = () => {
  return (
    <EmptyLayout>
      <Head title="Gabriel Ting" />
      <div className="wave-container">
        {/* params for particles from https://rpj.bembi.dev/#simple */}
        <Particles
          params={{
            particles: {
              number: {
                value: 15,
              },
              size: {
                value: 2,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
          className="particles"
        />
        {/* wave created from https://www.shapedivider.app/ */}
        <div class="custom-shape-divider-bottom-1610233301">
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
        <Container>
          <div id="hero-section">
            <Heading inverted>GABRIEL TING</Heading>
            <HeroDescription inverted>
              I am a UNSW computer science student in my penultimate year
              aspiring to become as a frontend web developer!
            </HeroDescription>
            <br />
          </div>
        </Container>
      </div>
      <br />
      <Container>
        <Subheading>selected projects</Subheading>
        <br />
        <div className="cards-section">
          {projects.map(project => (
            <Card
              title={project.title}
              description={project.description}
              labels={project.labels}
              img={project.img}
              link={project.link}
            />
          ))}
        </div>
        {/* <Subheading>blogs</Subheading>
        <br />
        <div className="cards-section">
          {blogs.map(blog => (
            <Card
              title={blog.title}
              description={blog.description}
              labels={blog.labels}
              img={blog.img}
              link={blog.link}
            />
          ))}
        </div> */}
        <br />
      </Container>
    </EmptyLayout>
  )
}

export default Home;