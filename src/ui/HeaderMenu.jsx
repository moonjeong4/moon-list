import styled from 'styled-components';
import Logout from '../features/authentication/Logout';
import ButtonIcon from './ButtonIcon';
import { RiLockPasswordLine } from 'react-icons/ri';
import { HiOutlinePhotograph } from 'react-icons/hi';
import EnModeToggle from './EnModeToggle';
import Modal from '../ui/Modal';
import UpdateUserDataForm from '../features/authentication/UpdateUserDataForm';
import UpdatePasswordForm from '../features/authentication/UpdatePasswordForm';

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

function HeaderMenu() {
  return (
    <StyledHeaderMenu>
      <li>
        <EnModeToggle />
      </li>
      <li>
        <Modal>
          <Modal.Open opens="userData-form">
            <ButtonIcon>
              <HiOutlinePhotograph />
            </ButtonIcon>
          </Modal.Open>
          <Modal.Window name="userData-form">
            <UpdateUserDataForm />
          </Modal.Window>
        </Modal>
      </li>
      <li>
        <Modal>
          <Modal.Open opens="userPassword-form">
            <ButtonIcon>
              <RiLockPasswordLine />
            </ButtonIcon>
          </Modal.Open>
          <Modal.Window name="userPassword-form">
            <UpdatePasswordForm />
          </Modal.Window>
        </Modal>
      </li>
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
