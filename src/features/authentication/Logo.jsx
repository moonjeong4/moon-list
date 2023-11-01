import styled from 'styled-components';

const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  width: 50%;
  border-radius: 50%;
  box-shadow: 0 0 40pt rgba(192, 255, 221, 0.81);
  transition: ease;
  transition-duration: 1s;
  transition-delay: 0.1s;

  &:hover {
    transform: rotate(360deg);
    box-shadow: 0 0 40pt red;
  }
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="/moon.jpeg" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
