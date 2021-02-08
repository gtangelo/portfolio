import React from "react";
import { Layout } from "components/Layout";
import { Container } from "styled-components/Container";
import Head from "components/Head";
import { Subheading } from "styled-components/Title";
import { blogs } from "../data";
import Card from "components/Card";
import "./index.css";

const Blog = () => {
  return (
    <Layout>
      <Head title="Blog | Gabriel Ting" />
      <Container>
        <br />
        <Subheading>blog</Subheading>
        <br />
        {/* <div className="cards-section">
          {blogs.map(project => (
            <Card
              title={project.title}
              description={project.description}
              labels={project.labels}
              img={project.img}
              link={project.link}
            />
          ))}
        </div> */}
        Stay tuned for some articles!
      </Container>
    </Layout>
  );
};

export default Blog;
