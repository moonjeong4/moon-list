import Modal from '../ui/Modal';
import ConfirmDelete from '../ui/ConfirmDelete';
import { useDeleteItems } from './useDeleteItems';

export default function Item({ item }) {
  const { id: itemId, description } = item;
  const { isDeleting, mutate } = useDeleteItems();

  return (
    <li className="flex items-center gap-3 text-xl text-yellow-200">
      <input
        className="h-5 w-5"
        type="checkbox"
        value={item.checked || ''}
        onChange={() => {}}
      />
      <span className={item.checked ? 'line-through' : ''}>{description}</span>
      <Modal>
        <Modal.Open>
          <button>❌</button>
        </Modal.Open>
        <Modal.Window>
          <ConfirmDelete
            resourceName={description}
            disabled={isDeleting}
            onConfirm={() => mutate(itemId)}
          />
        </Modal.Window>
      </Modal>
    </li>
  );
}
