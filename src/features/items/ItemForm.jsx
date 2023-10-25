import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useCreateEditItems } from './useCreateEditItems';

function Form() {
  const { register, handleSubmit, reset } = useForm();

  const { isCreating, createItem, queryClient } = useCreateEditItems();

  function onSubmit(data) {
    const existingItems = queryClient.getQueryData(['items']);
    if (
      existingItems.some(
        (item) =>
          item.description.trim().toLowerCase() ===
          data.description.trim().toLowerCase(),
      )
    )
      return toast.error('It already exists.');

    createItem(data);
    reset();
  }

  function onError(errors) {
    toast.error(errors.description.message);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} className="text-center">
      <h3 className="mb-2 mr-4 text-2xl text-yellow-200">
        Add it to the list. 📋
      </h3>
      <input
        className="mr-3 rounded-lg border border-gray-300 p-1 "
        type="text"
        {...register('description', {
          required: "The field can't be empty!",
        })}
        placeholder="type items please.."
      />
      <button
        className="rounded-lg bg-blue-500 p-1.5 uppercase text-white hover:bg-blue-700"
        disabled={isCreating}
      >
        Add
      </button>
    </form>
  );
}

export default Form;
