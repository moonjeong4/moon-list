import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteItem as deleteItemApi } from '../../services/apiItems';
import toast from 'react-hot-toast';
import { useEnMode } from '../../context/EnModeContext';

export function useDeleteItems() {
  const queryClient = useQueryClient();
  const { isEnMode } = useEnMode();

  const { isLoading: isDeleting, mutate: deleteItem } = useMutation({
    mutationFn: deleteItemApi,
    onSuccess: () => {
      toast.success(
        isEnMode
          ? 'Item successfully deleted'
          : "L'élément a été supprimé avec succès",
      );

      queryClient.invalidateQueries({
        queryKey: ['items'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteItem };
}
