import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useEnMode } from '../../context/EnModeContext';

export function useLogin() {
  const { isEnMode } = useEnMode();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user.user);
      navigate('/items', { replace: true });
    },
    onError: (err) => {
      // console.log('ERROR', err);
      toast.error(
        isEnMode
          ? 'Provided email or password are incorrect'
          : "L'adresse courriel ou le mot de passe fourni sont incorrects",
      );
    },
  });

  return { login, isLoading };
}
