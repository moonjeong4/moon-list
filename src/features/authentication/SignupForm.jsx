import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRowVertical from '../../ui/FormRowVertical';
import Input from '../../ui/Input';
import { useSignup } from './useSignup';
import { useLogin } from './useLogin';
import { useEnMode } from '../../context/EnModeContext';

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { signup, isLoading } = useSignup();
  const { login, isLoading: isLoggingIn } = useLogin();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const { isEnMode } = useEnMode();

  const isWorking = isLoading || isLoggingIn;

  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSettled: () => {
          login({ email, password });
          reset();
        },
      },
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical
        label={isEnMode ? 'Full name' : 'Nom et prénom'}
        error={errors?.fullName?.message}
      >
        <Input
          type="text"
          id="fullName"
          disabled={isWorking}
          {...register('fullName', {
            required: isEnMode
              ? 'This field is required'
              : 'Ce champ est obligatoire',
          })}
        />
      </FormRowVertical>

      <FormRowVertical
        label={isEnMode ? 'Email address' : 'Adresse courriel'}
        error={errors?.email?.message}
      >
        <Input
          type="email"
          id="email"
          disabled={isWorking}
          {...register('email', {
            required: isEnMode
              ? 'This field is required'
              : 'Ce champ est obligatoire',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: isEnMode
                ? 'Please provide a valid email address'
                : 'Veuillez fournir une adresse courriel valide',
            },
          })}
        />
      </FormRowVertical>

      <FormRowVertical
        label={
          isEnMode
            ? 'Password (min 6 characters)'
            : 'Mot de passe (min 6 caractères)'
        }
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          disabled={isWorking}
          {...register('password', {
            required: isEnMode
              ? 'This field is required'
              : 'Ce champ est obligatoire',
            minLength: {
              value: 6,
              message: isEnMode
                ? 'Password needs a minimum of 6 characters'
                : 'Il nécessite un minimum de 6 caractères',
            },
          })}
        />
      </FormRowVertical>

      <FormRowVertical
        label={isEnMode ? 'Repeat password' : 'Répétez le mot de passe'}
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isWorking}
          {...register('passwordConfirm', {
            required: isEnMode
              ? 'This field is required'
              : 'Ce champ est obligatoire',
            validate: (value) =>
              value === getValues().password ||
              (isEnMode
                ? 'Passwords need to match'
                : 'Il doivent correspondre'),
          })}
        />
      </FormRowVertical>

      <FormRowVertical>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          disabled={isWorking}
          onClick={reset}
        >
          {isEnMode ? 'Reset' : 'Réinitialiser'}
        </Button>
        <Button disabled={isWorking}>
          {isEnMode ? 'Create new user' : 'Créez un nouvel'}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default SignupForm;
