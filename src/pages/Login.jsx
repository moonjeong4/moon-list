import styled from 'styled-components';
import LoginForm from '../features/authentication/LoginForm';
import LoginHeading from '../features/authentication/LoginHeading';
import Logo from '../features/authentication/Logo';
import Button from '../ui/Button';
import Modal from '../ui/Modal';
import SignupForm from '../features/authentication/SignupForm';

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 18rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: #082f49;
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <LoginHeading />
      <LoginForm />
      <Modal>
        <Modal.Open opens="account-form">
          <Button size="small">create account</Button>
        </Modal.Open>
        <Modal.Window name="account-form">
          <SignupForm />
        </Modal.Window>
      </Modal>
    </LoginLayout>
  );
}

export default Login;
