import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import { useDeleteItems } from './useDeleteItems';
import { useCreateEditItems } from './useCreateEditItems';

export default function Item({ item }) {
  const { id: itemId, description, checked } = item;
  const { isDeleting, deleteItem } = useDeleteItems();
  const { isEditing, editItem } = useCreateEditItems();

  const isWorking = isEditing || isDeleting;

  const handleCheckboxChange = async () => {
    const updatedItem = { ...item, checked: !checked };

    editItem({ newItemData: updatedItem, id: itemId });
  };

  return (
    <li className="flex items-center gap-3 text-xl text-yellow-200">
      <input
        className="h-5 w-5"
        type="checkbox"
        onChange={handleCheckboxChange}
        checked={checked}
        disabled={isWorking}
      />
      <span className={checked ? 'line-through' : ''}>{description}</span>
      <Modal>
        <Modal.Open>
          <button>❌</button>
        </Modal.Open>
        <Modal.Window>
          <ConfirmDelete
            resourceName={description}
            disabled={isWorking}
            onConfirm={() => deleteItem(itemId)}
          />
        </Modal.Window>
      </Modal>
    </li>
  );
}
