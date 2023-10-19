import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteItem } from '../services/apiItems';
import toast from 'react-hot-toast';

export function useDeleteItems() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteItem,
    onSuccess: () => {
      toast.success('Item successfully deleted');

      queryClient.invalidateQueries({
        queryKey: ['items'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, mutate };
}
