import { useQuery } from '@tanstack/react-query';
import { getItems } from '../../services/apiItems';
import { useUser } from '../authentication/useUser';

export function useItems() {
  const { user } = useUser();

  const {
    isLoading,
    data: listItems,
    error,
  } = useQuery({
    queryKey: ['items'],
    queryFn: () => getItems(user),
  });

  return { isLoading, listItems, error };
}
