import Modal from '../ui/Modal';
import ConfirmDelete from '../ui/ConfirmDelete';
import { useDeleteItems } from './useDeleteItems';
import { useCreateEditItems } from './useCreateEditItems';

export default function Item({ item }) {
  const { id: itemId, description, checked } = item;
  const { isDeleting, deleteItem } = useDeleteItems();
  const { isWorking, editItem } = useCreateEditItems();

  const handleCheckboxChange = async () => {
    // Toggle the "checked" status
    const updatedItem = { ...item, checked: !checked };

    // Call the editItem function to update the item
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
            disabled={isDeleting}
            onConfirm={() => deleteItem(itemId)}
          />
        </Modal.Window>
      </Modal>
    </li>
  );
}
