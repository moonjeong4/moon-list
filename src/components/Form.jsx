import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { createItem, getItems } from '../services/apiItems';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

function Form() {
  const { register, handleSubmit, reset } = useForm();

  const queryClient = useQueryClient();

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createItem,
    onSuccess: () => {
      toast.success('New item successfully added');
      queryClient.invalidateQueries({ queryKey: ['items'] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  // const [description, setDescription] = useState('');

  // function handleSubmit(e) {
  //   e.preventDefault();

  //   if (!description) return;

  //   // const newItem = { description, checked: false, id: Date.now() };
  //   // // console.log(newItem);

  //   // onAddItems(newItem);

  //   // setDescription('');
  // }

  function onSubmit(data) {
    const existingItems = queryClient.getQueryData(['items']);
    if (existingItems.some((item) => item.description === data.description))
      return toast.error('It already exists.');

    mutate(data);
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
        className="mr-3 rounded-lg border border-gray-300 p-1"
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
