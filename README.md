# Portfolio
This repository serves as the codebase for my own portfolio website. Currently, there is a github actions workflow set in place. Everytime a push has been made to the `main` branch, changes are reflected in the deployed website. Website can be access by the following url: https://gtangelo.github.io/portfolio/

## Tech Stack
- My portfolio website was created using React with the Gatsby framework.
- Website was deployed using Github pages
## Getting Started
These instructions will allow you to view my portfolio website locally.
### Installation
1. Clone the repo and enter into the directory.
```bash
git clone https://github.com/gtangelo/portfolio.git
cd portfolio
```
2. Install npm packages.
```bash
npm install
```
3. Start the server
```bash
gatsby develop
```
4. You should now be able to access the website at `http://localhost:8000`

## File Structure
1.  **`/node_modules`**: contains all of the modules of code that your project depends on (npm packages)

2.  **`/src`**: contains all of the code related to what you will see on the front-end of your site.

3.  **`gatsby-config.js`**: main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

4.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.