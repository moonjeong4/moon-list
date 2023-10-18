import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteItem } from '../services/apiItems';
import toast from 'react-hot-toast';
import Modal from '../ui/Modal';
import ConfirmDelete from '../ui/ConfirmDelete';

export default function Item({ item }) {
  const { id: itemId } = item;

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

  return (
    <li className="flex items-center gap-3 text-xl text-yellow-200">
      <input
        className="h-5 w-5"
        type="checkbox"
        value={item.checked || ''}
        onChange={() => {}}
      />
      <span className={item.checked ? 'line-through' : ''}>
        {item.description}
      </span>

      <Modal.Open>
        <button>❌</button>
      </Modal.Open>
      <Modal.Window>
        <ConfirmDelete
          resourceName={item.description}
          disabled={isDeleting}
          onConfirm={() => mutate(itemId)}
          itemId={itemId}
        />
      </Modal.Window>
    </li>
  );
}
