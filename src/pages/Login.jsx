import styled from 'styled-components';
import LoginForm from '../features/authentication/LoginForm';
import LoginHeading from '../features/authentication/LoginHeading';
import Logo from '../features/authentication/Logo';
import Button from '../ui/Button';

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
      <Button size="small">create account</Button>
    </LoginLayout>
  );
}

export default Login;
