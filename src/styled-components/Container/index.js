import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1430px;
  width: 100%;
  padding: 0 20px;
`;

export const ProjectContainer = styled(Container)`
  max-width: 1000px;
  padding-top: 50px;
  /* margin-top: -30vh;
  background-color: #fafafa;
  border-radius: 30px;
  padding: 50px 40px; */

  & img {
    width: 90%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  /* & * {
    margin-bottom: 20px;
  } */

  & ul,
  & ol {
    margin-left: 30px;
    margin-bottom: 15px;
  }

  & li {
    margin-bottom: 5px;
  }

  & h1 {
    font-size: 40px;
    font-weight: 900;
    text-transform: uppercase;
    margin-bottom: 5px;

    @media (max-width: 510px) {
      font-size: 29px;
    }
  }

  & h2 {
    font-size: 24px;
    border-bottom: solid #a5a5a5 1px;
    text-align: center;
    margin-top: 5px;
    margin-bottom: 15px;
  }

  & p > code {
    background-color: #faeab5;
    padding: 5px 0;
    font-weight: normal;
  }

  & p {
    font-size: 15px;
    margin-bottom: 15px;
  }

  & pre {
    width: 100%;
    color: white;
    overflow: auto;
    background: #333;
    padding: 15px 20px;
    border-radius: 20px;
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

export const CardContainer = styled.div`
  max-width: 430px;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 20px;
  box-shadow: 0px 5px 50px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 2rem;
`;

export default Container;
