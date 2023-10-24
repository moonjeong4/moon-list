import LoginHeading from '../features/authentication/LoginHeading';
import Logo from '../features/authentication/Logo';

function Login() {
  return (
    <div className="grid-cols-48rem gap-3.2 grid min-h-screen place-content-center  bg-sky-950">
      <Logo />
      <LoginHeading />
      <p>Login Form</p>
    </div>
  );
}

export default Login;
