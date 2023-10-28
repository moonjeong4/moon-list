import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRowVertical from '../../ui/FormRowVertical';
import Input from '../../ui/Input';

import { useUpdateUser } from './useUpdateUser';
import { useEnMode } from '../../context/EnModeContext';

function UpdatePasswordForm({ onCloseModal }) {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { updateUser, isUpdating } = useUpdateUser();
  const { isEnMode } = useEnMode();

  function onSubmit({ password }) {
    updateUser({ password }, { onSuccess: reset });
    onCloseModal();
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical
        label={
          isEnMode
            ? 'New password (min 6 chars)'
            : 'Nouveau mot de passe (min 6 caractères)'
        }
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          disabled={isUpdating}
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
        label={isEnMode ? 'Confirm password' : 'Confirmez le mot de passe'}
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          autoComplete="new-password"
          id="passwordConfirm"
          disabled={isUpdating}
          {...register('passwordConfirm', {
            required: isEnMode
              ? 'This field is required'
              : 'Ce champ est obligatoire',
            validate: (value) =>
              getValues().password === value ||
              (isEnMode
                ? 'Passwords need to match'
                : 'Il doivent correspondre'),
          })}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button onClick={reset} type="reset" variation="secondary">
          {isEnMode ? 'Reset' : 'Réinitialiser'}
        </Button>
        <Button disabled={isUpdating}>
          {isEnMode ? 'Update password' : 'Mettre à jour le mot de passe'}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default UpdatePasswordForm;
