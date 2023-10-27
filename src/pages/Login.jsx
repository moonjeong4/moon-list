import styled from 'styled-components';
import LoginForm from '../features/authentication/LoginForm';
import LoginHeading from '../features/authentication/LoginHeading';
import Logo from '../features/authentication/Logo';
import Button from '../ui/Button';
import Modal from '../ui/Modal';
import SignupForm from '../features/authentication/SignupForm';
import EnModeToggle from '../ui/EnModeToggle';

const LoginLayout = styled.main`
  display: grid;
  grid-template-columns: 18rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
`;

function Login() {
  return (
    <div className="h-screen bg-sky-950">
      <div className="flex justify-end px-8 py-4">
        <EnModeToggle />
      </div>
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
    </div>
  );
}

export default Login;
