import { useQuery } from '@tanstack/react-query';
import { getItems } from '../services/apiItems';

export function useItems() {
  const {
    isLoading,
    data: listItems,
    error,
  } = useQuery({
    queryKey: ['items'],
    queryFn: getItems,
  });

  return { isLoading, listItems, error };
}
