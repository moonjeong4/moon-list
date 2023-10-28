import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { updateCurrentUser } from '../../services/apiAuth';
import { useEnMode } from '../../context/EnModeContext';

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { isEnMode } = useEnMode();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      toast.success(
        isEnMode
          ? 'User account successfully updated'
          : 'Le compte utilisateur a été mis à jour avec succès.',
      );
      queryClient.setQueryData(['user'], user);
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateUser, isUpdating };
}
