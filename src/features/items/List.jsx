import { useState } from 'react';
import Item from './Item';
import Spinner from '../../ui/Spinner';
import { useItems } from './useItems';
import { useDeleteItems } from './useDeleteItems';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import { useCreateEditItems } from './useCreateEditItems';
import { useUser } from '../authentication/useUser';
import { useEnMode } from '../../context/EnModeContext';
import Stats from './Stats';

function List() {
  const [sortBy, setSortBy] = useState('checked');

  const { isLoading, listItems } = useItems();
  const { isDeleting, deleteItem } = useDeleteItems();
  const { isCreating, isEditing } = useCreateEditItems();
  const { isEnMode } = useEnMode();

  const { user } = useUser();

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
    <div className="flex flex-col items-center justify-between">
      <ul className="grid w-4/5 grid-cols-auto content-start justify-center gap-5 py-8">
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
          <option value="checked">
            {isEnMode ? 'Sort by checked status' : 'Par statut vérifié'}
          </option>
          <option value="description">
            {isEnMode ? 'Sort by description' : 'Par description'}
          </option>
          <option value="input">
            {isEnMode ? 'Sort by input order' : 'Par ordre de saisie'}
          </option>
        </select>
        <Modal>
          <Modal.Open>
            <button className="rounded-lg bg-blue-500 p-1.5 uppercase text-white hover:bg-blue-700">
              {isEnMode ? 'clear list' : 'effacer tout'}
            </button>
          </Modal.Open>
          <Modal.Window>
            <ConfirmDelete
              resourceName={isEnMode ? 'All' : 'Tout'}
              disabled={isDeleting || isEditing || isCreating}
              onConfirm={() => deleteItem(user.id)}
            />
          </Modal.Window>
        </Modal>
      </div>
      <Stats listItems={listItems} isEnMode={isEnMode} />
    </div>
  );
}

export default List;
