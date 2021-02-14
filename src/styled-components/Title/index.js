import styled from 'styled-components';

const Title = styled.div`
  color: ${props => (props.inverted ? "#FFFFFF" : "#000000")};
`;

export const Heading = styled(Title)`
  font-size: 65px;
  letter-spacing: 5px;
  text-transform: uppercase;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 55px;
  }

  @media (max-width: 510px) {
    font-size: 32px;
  }
`;

export const Subheading = styled(Title)`
  margin-bottom: 5px;
  padding: 5px 10px;
  font-size: 25px;
  font-weight: bold;
  text-transform: lowercase;
  border-bottom: solid #000 1px;
`;

export const HeroDescription = styled(Title)`
  font-size: 18px;
  max-width: 800px;
`;

export const CardHeading = styled(Title)`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 5px;
`;

export const CardDescription = styled(Title)`
  font-size: 13px;
`;