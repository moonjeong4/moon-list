import { useMutation } from '@tanstack/react-query';
import { signup as signupApi } from '../../services/apiAuth';
import { toast } from 'react-hot-toast';
import { useEnMode } from '../../context/EnModeContext';

export function useSignup() {
  const { isEnMode } = useEnMode();
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      toast.success(
        isEnMode
          ? 'Account successfully created! Logging in..'
          : 'Le compte a été créé avec succès ! Se connecter..',
      );
    },
  });

  return { signup, isLoading };
}
