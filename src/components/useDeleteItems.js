import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteItem as deleteItemApi } from '../services/apiItems';
import toast from 'react-hot-toast';

export function useDeleteItems() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteItem } = useMutation({
    mutationFn: deleteItemApi,
    onSuccess: () => {
      toast.success('Item successfully deleted');

      queryClient.invalidateQueries({
        queryKey: ['items'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteItem };
}
