import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createEditItem } from '../../services/apiItems';
import toast from 'react-hot-toast';
import { useEnMode } from '../../context/EnModeContext';

export function useCreateEditItems() {
  const queryClient = useQueryClient();
  const { isEnMode } = useEnMode();

  const { mutate: createItem, isLoading: isCreating } = useMutation({
    mutationFn: createEditItem,
    onSuccess: () => {
      toast.success(
        isEnMode
          ? 'New item successfully added'
          : 'Un nouvel élément a été ajouté avec succès.',
      );
      queryClient.invalidateQueries({ queryKey: ['items'] });
    },
    onError: (err) => toast.error(err.message),
  });

  const { mutate: editItem, isLoading: isEditing } = useMutation({
    mutationFn: ({ newItemData, id }) => createEditItem(newItemData, id),
    onSuccess: () => {
      toast.success(
        isEnMode
          ? 'Item successfully edited'
          : "l'élément a été modifié avec succès",
      );
      queryClient.invalidateQueries({ queryKey: ['items'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, isEditing, createItem, editItem };
}
