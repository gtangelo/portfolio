import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1430px;
  width: 100%;
  display: block;
  padding: 0 20px;
`

export const ProjectContainer = styled(Container)`
  max-width: 1000px;

  & img {
    width: 90%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  & * {
    margin-bottom: 15px;
  }

  & ul {
    margin-left: 30px;
  }

  & li {
    margin-bottom: 5px;
  }
`

export const CardContainer = styled.div`
  max-width: 430px;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 20px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 2rem;
`

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  gap: 80px;
`

export default Container
