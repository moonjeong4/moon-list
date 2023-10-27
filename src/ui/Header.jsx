import styled from 'styled-components';
import HeaderMenu from './HeaderMenu';
import UserAvatar from '../features/authentication/UserAvatar';

const StyledHeader = styled.header`
  /* background-color: #fff; */
  padding: 1rem 0.5rem;
  /* border-bottom: 1px solid #f3f4f6; */

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
