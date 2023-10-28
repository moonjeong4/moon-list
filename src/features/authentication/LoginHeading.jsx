import { useEnMode } from '../../context/EnModeContext';

function LoginHeading() {
  const { isEnMode } = useEnMode();
  return (
    <h4 className="text-center text-3xl font-semibold text-yellow-400">
      {isEnMode ? 'Log in to your account' : 'Connectez-vous à votre compte'}
    </h4>
  );
}

export default LoginHeading;
