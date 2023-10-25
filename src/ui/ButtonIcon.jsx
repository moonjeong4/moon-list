import styled from 'styled-components';

const ButtonIcon = styled.button`
  background: none;
  border: none;
  padding: 0.2rem;
  border-radius: 5px;
  transition: all 0.2s;

  &:hover {
    background-color: #0c4a6e;
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: #facc15;
  }
`;

export default ButtonIcon;
