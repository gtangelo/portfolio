import React from 'react';
import { Layout } from "components/Layout";
import { Container } from "styled-components/Container";
import Head from "components/Head";

const Resume = () => {
  return (
    <Layout>
      <Head title="Resume | Gabriel Ting" />
      <Container>
        <br />
        <br />
        <img src="/resume.jpg" alt="Resume" style={{ width: "70%" }} />
        <br />
        <br />
        <br />
      </Container>
    </Layout>
  );
};

export default Resume;
