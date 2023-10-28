import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useCreateEditItems } from './useCreateEditItems';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import { useDeleteItems } from './useDeleteItems';
import { useItems } from './useItems';
import { useUser } from '../authentication/useUser';
import { useEnMode } from '../../context/EnModeContext';

function Form() {
  const { register, handleSubmit, reset } = useForm();

  const { user } = useUser();
  const { listItems } = useItems();
  const { isCreating, isEditing, createItem } = useCreateEditItems();
  const { isDeleting, deleteItem } = useDeleteItems();

  const { isEnMode } = useEnMode();

  function onSubmit(data) {
    if (
      listItems.some(
        (item) =>
          item.description.trim().toLowerCase() ===
          data.description.trim().toLowerCase(),
      )
    )
      return toast.error(isEnMode ? 'It already exists.' : 'Cela existe déjà.');

    createItem({ ...data, userId: user.id });
    reset();
  }

  function onError(errors) {
    toast.error(errors.description.message);
  }

  function onDeleteChecked() {
    const checkedItemIds = listItems
      .filter((item) => item.checked)
      .map((item) => item.id);

    deleteItem(checkedItemIds);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit, onError)} className="text-center">
        <h3 className="mb-2 text-2xl text-yellow-200">
          {isEnMode ? 'Add it to the list. 📋' : 'Ajoutez-le à la liste. 📋'}
        </h3>
        <input
          className="mb-3 mr-3 rounded-lg border border-gray-300 p-1 "
          type="text"
          {...register('description', {
            required: isEnMode
              ? "The field can't be empty!"
              : 'Le champ ne peut pas être vide!',
          })}
          placeholder={isEnMode ? 'type it here please..' : 'tapez-le ici..'}
        />
        <button
          className="rounded-lg bg-blue-500 p-1.5 uppercase text-white hover:bg-blue-700"
          disabled={isCreating}
        >
          {isEnMode ? 'add' : 'ajouter'}
        </button>
      </form>
      <Modal>
        <Modal.Open>
          <button
            className="mx-auto block rounded-lg bg-blue-500 p-1.5 uppercase text-white hover:bg-blue-700"
            disabled={isCreating}
          >
            {isEnMode ? 'delete checked things' : 'supprimer les cochés'}
          </button>
        </Modal.Open>
        <Modal.Window>
          <ConfirmDelete
            resourceName={isEnMode ? 'Checked things' : 'les cochés'}
            disabled={isDeleting || isEditing}
            onConfirm={onDeleteChecked}
          />
        </Modal.Window>
      </Modal>
    </>
  );
}

export default Form;
