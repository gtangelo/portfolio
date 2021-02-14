import React from "react";
import { Layout } from "components/Layout";
import { Container } from "styled-components/Container";
import Head from "components/Head";
import { Subheading } from "styled-components/Title";
import { projects } from "../data";
import Card from "components/Card";
import './index.css';


const Project = () => {
  return (
    <Layout>
      <Head title="Projects | Gabriel Ting" />
      <Container>
        <br />
        <Subheading>projects</Subheading>
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
      </Container>
    </Layout>
  );
};

export default Project;
