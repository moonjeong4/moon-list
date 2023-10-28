import { useState } from 'react';

import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import Form from '../../ui/Form';
import FormRowVertical from '../../ui/FormRowVertical';
import Input from '../../ui/Input';

import { useUser } from './useUser';
import { useUpdateUser } from './useUpdateUser';
import FormRowFile from '../../ui/FormFile';
import { useEnMode } from '../../context/EnModeContext';

function UpdateUserDataForm({ onCloseModal }) {
  // We don't need the loading state, and can immediately use the user data, because we know that it has already been loaded at this point
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();

  const { updateUser, isUpdating } = useUpdateUser();

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);
  const { isEnMode } = useEnMode();

  function handleSubmit(e) {
    e.preventDefault();
    if (!fullName) return;
    updateUser(
      { fullName, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          e.target.reset();
        },
      },
    );
    onCloseModal();
  }

  function handleCancel() {
    setFullName(currentFullName);
    setAvatar(null);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label={isEnMode ? 'Email address' : 'Adresse courriel'}>
        <input
          type="text"
          value={email}
          disabled
          className="rounded border border-gray-300 bg-gray-300 p-1 px-2 shadow-sm"
        />
      </FormRowVertical>
      <FormRowVertical label={isEnMode ? 'Full name' : 'Nom et prénom'}>
        <Input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          id="fullName"
          disabled={isUpdating}
        />
      </FormRowVertical>
      <FormRowFile label={isEnMode ? 'Avatar image' : "Image d'avatar"}>
        <FileInput
          id="avatar"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
          disabled={isUpdating}
        />
      </FormRowFile>
      <FormRowVertical>
        <Button
          type="reset"
          variation="secondary"
          disabled={isUpdating}
          onClick={handleCancel}
        >
          {isEnMode ? 'Reset' : 'Réinitialiser'}
        </Button>
        <Button disabled={isUpdating}>
          {isEnMode ? 'Update account' : 'Mettre à jour le compte'}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default UpdateUserDataForm;
