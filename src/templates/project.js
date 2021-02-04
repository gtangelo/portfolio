import React from 'react';
import { Layout } from "components/Layout";
import { graphql } from 'gatsby';
import { ProjectContainer, Container } from "styled-components/Container";
import './project.css';
import Head from "components/Head";
import { Heading } from "styled-components/Title";


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
`;

const Project = (props) => {
  return (
    <Layout>
      <Head
        title={`${props.data.markdownRemark.frontmatter.title} | Gabriel Ting`}
      />
      {/* <img
        style={{ width: "100%", height: "500px", objectFit: "cover" }}
        src={props.data.markdownRemark.frontmatter.banner}
        alt="Banner"
      /> */}
      <ProjectContainer>
        <h1>{props.data.markdownRemark.frontmatter.title}</h1>
        <div className="btn-container">
          {props.data.markdownRemark.frontmatter.github !== "" && (
            <div className="github-btn">
              <a
                href={props.data.markdownRemark.frontmatter.github}
                target="_blank"
                rel="noreferrer"
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
                rel="noreferrer"
              >
                  Deploy
              </a>
            </div>
          )}
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        />
        <br />
      </ProjectContainer>
    </Layout>
  );
};

export default Project;
