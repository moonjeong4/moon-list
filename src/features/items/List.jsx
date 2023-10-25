import { useState } from 'react';
import Item from './Item';
import Spinner from '../../ui/Spinner';
import { useItems } from './useItems';
import { useDeleteItems } from './useDeleteItems';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import { useCreateEditItems } from './useCreateEditItems';

function List() {
  const [sortBy, setSortBy] = useState('checked');

  const { isLoading, listItems } = useItems();
  const { isDeleting, deleteItem } = useDeleteItems();
  const { isCreating, isEditing } = useCreateEditItems();

  if (isLoading) return <Spinner />;

  let sortedItems;

  if (sortBy === 'input') sortedItems = listItems;

  if (sortBy === 'description')
    sortedItems = listItems
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === 'checked')
    sortedItems = listItems
      .slice()
      .sort((a, b) => Number(a.checked) - Number(b.checked));

  return (
    <div className="mb-2 flex max-h-higher flex-col items-center justify-between overflow-y-auto">
      <ul className="grid w-4/5 grid-cols-auto content-start justify-center gap-5 overflow-scroll py-8">
        {sortedItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>

      <div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="mr-3 rounded-lg border border-gray-300 p-1.5 "
        >
          <option value="checked">Sort by checked status</option>
          <option value="description">Sort by description</option>
          <option value="input">Sort by input order</option>
        </select>
        <Modal>
          <Modal.Open>
            <button className="rounded-lg bg-blue-500 p-1.5 uppercase text-white hover:bg-blue-700">
              Clear list
            </button>
          </Modal.Open>
          <Modal.Window>
            <ConfirmDelete
              resourceName="All"
              disabled={isDeleting || isEditing || isCreating}
              onConfirm={() => deleteItem()}
            />
          </Modal.Window>
        </Modal>
      </div>
    </div>
  );
}

export default List;
