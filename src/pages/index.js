import React from "react";
import { Layout } from "components/Layout";
import "./index.css";
import { Container } from "styled-components/Container";
import { projects } from "../data";
import { Heading, Subheading, HeroDescription } from "styled-components/Title";
import Card from "components/Card";
import Head from "components/Head";

const Home = () => {
  return (
    <Layout>
      <Head title="Gabriel Ting" />
      <div id="hero-container">
        <Container>
          <div id="hero-section">
            <Heading>GABRIEL TING</Heading>
            <HeroDescription>
              I am a UNSW computer science student in my penultimate year
              aspiring to become as a frontend web developer!
            </HeroDescription>
            <br />
          </div>
        </Container>
      </div>
      <div style={{ backgroundColor: "#FFFFFF" }}>
        <Container>
          <br />
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
      </div>
    </Layout>
  );
};

export default Home;