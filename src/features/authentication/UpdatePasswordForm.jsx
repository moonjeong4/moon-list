import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRowVertical from '../../ui/FormRowVertical';
import Input from '../../ui/Input';

import { useUpdateUser } from './useUpdateUser';

function UpdatePasswordForm({ onCloseModal }) {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { updateUser, isUpdating } = useUpdateUser();

  function onSubmit({ password }) {
    updateUser({ password }, { onSuccess: reset });
    onCloseModal();
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical
        label="New password (min 6 chars)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          disabled={isUpdating}
          {...register('password', {
            required: 'This field is required',
            minLength: {
              value: 6,
              message: 'Password needs a minimum of 6 characters',
            },
          })}
        />
      </FormRowVertical>

      <FormRowVertical
        label="Confirm password"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          autoComplete="new-password"
          id="passwordConfirm"
          disabled={isUpdating}
          {...register('passwordConfirm', {
            required: 'This field is required',
            validate: (value) =>
              getValues().password === value || 'Passwords need to match',
          })}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button onClick={reset} type="reset" variation="secondary">
          Reset
        </Button>
        <Button disabled={isUpdating}>Update password</Button>
      </FormRowVertical>
    </Form>
  );
}

export default UpdatePasswordForm;
