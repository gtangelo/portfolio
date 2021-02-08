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
];

export const blogs = [
  {
    title: "STEM Leaders Program",
    description:
      "Traceback is a Google Chrome extension which records the time user spends on different tasks.",
    img: "traceback-banner.png",
    labels: [REACTJS],
    link: "",
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