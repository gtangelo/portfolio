import React from 'react';
import { Layout } from "components/Layout";
import Head from "components/Head";
import './resume.css';
import resume from "assets/resume.jpg";

const Resume = () => {
  return (
    <Layout>
      <Head title="Resume | Gabriel Ting" />
      <br />
      <div className="resume-container">
        <a
          download="gabriel-ting-resume.pdf"
          href="/resume.pdf"
          title="Resume"
        >
          <img src={resume} alt="Resume"/>
        </a>
      </div>
      <br />
    </Layout>
  );
};

export default Resume;
