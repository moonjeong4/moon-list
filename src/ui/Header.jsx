import styled from 'styled-components';
import Logout from '../features/authentication/Logout';
// import HeaderMenu from './HeaderMenu';
// import UserAvatar from "../features/authentication/UserAvatar";

const StyledHeader = styled.header`
  /* background-color: #fff; */
  padding: 1rem 4rem 0 0;
  /* border-bottom: 1px solid #f3f4f6; */

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;

function Header() {
  return (
    <StyledHeader>
      {/* <UserAvatar /> */}
      {/* <HeaderMenu /> */}
      <Logout />
    </StyledHeader>
  );
}

export default Header;
