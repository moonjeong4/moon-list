import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createEditItem } from '../services/apiItems';
import toast from 'react-hot-toast';

export function useCreateEditItems() {
  const queryClient = useQueryClient();

  const { mutate: createItem, isLoading: isCreating } = useMutation({
    mutationFn: createEditItem,
    onSuccess: () => {
      toast.success('New item successfully added');
      queryClient.invalidateQueries({ queryKey: ['items'] });
    },
    onError: (err) => toast.error(err.message),
  });

  const { mutate: editItem, isLoading: isEditing } = useMutation({
    mutationFn: ({ newItemData, id }) => createEditItem(newItemData, id),
    onSuccess: () => {
      toast.success('Item successfully edited');
      queryClient.invalidateQueries({ queryKey: ['items'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, isEditing, createItem, editItem, queryClient };
}
