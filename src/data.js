const REACTJS = {
  title: "ReactJS",
  colour: "#5ED3F3",
};

const HTML_CSS = {
  title: "HTML/CSS",
  colour: "#E96228",
};

const UX_UI_DESIGN = {
  title: "UX/UI",
  colour: "#8A8AF6",
};

const PYTHON = {
  title: "Python",
  colour: "#FFCE3B",
};

const FLASK = {
  title: "Flask",
  colour: "#387AB1",
};

const TESTING = {
  title: "Testing",
  colour: "#2EA44F",
};

const DOCKER = {
  title: "Docker",
  colour: "#4285F4",
};

const CTF = {
  title: "CTF",
  colour: "#EA4335",
};

export const projects = [
  {
    title: "Traceback",
    description:
      "Traceback is a Google Chrome extension which records the time user spends on different tasks.",
    img: "traceback-banner.png",
    labels: [REACTJS],
    link: "/traceback",
  },
  {
    title: "Flockr RESTFUL API",
    description:
      "Backend API project that is used to serve a communication tool application similar to Slack called Flockr.",
    img: "flockr-banner.png",
    labels: [PYTHON, FLASK, TESTING],
    link: "/flockr",
  },
  {
    title: "My Portfolio Website",
    description:
      "Created my portfolio website using ReactJS and my own custom CSS styling.",
    img: "website-banner.png",
    labels: [REACTJS, HTML_CSS, UX_UI_DESIGN],
    link: "/website",
  },
  // {
  //   title: "Enactus UNSW Website",
  //   description: "Help redesign and update UNSW Enactus Society's website",
  //   img: "enactus-banner.png",
  //   labels: [REACTJS, HTML_CSS, UX_UI_DESIGN],
  //   link: "https://enactusunsw.org/",
  // },
  // {
  //   title: "Security Society Website",
  //   description: "Redesign landing page and improve existing features",
  //   img: "secsoc-banner.png",
  //   labels: [HTML_CSS, UX_UI_DESIGN],
  //   link: "https://unswsecurity.com/",
  // },
];

export const blogs = [
  {
    title: "CTF Infrastructure on GCP",
    description: "Setting up the infrastructure of SecSoc 2021 O-Week CTF",
    img: "ctf-banner.png",
    labels: [DOCKER, CTF],
    link: "/ctf",
  },
  {
    title: "My Portfolio Website",
    description:
      "Created my portfolio website using ReactJS and my own custom CSS styling.",
    img: "website-banner.png",
    labels: [REACTJS, HTML_CSS, UX_UI_DESIGN],
    link: "/website",
  },
];