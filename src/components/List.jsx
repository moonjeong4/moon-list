import { useState } from 'react';
import Item from './Item';

function List({ items, onDeleteItem, onToggleItem, onClearItems }) {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems;

  if (sortBy === 'input') sortedItems = items;

  if (sortBy === 'description')
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === 'checked')
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.checked) - Number(b.checked));
  return (
    <div className="mb-2 flex flex-col items-center justify-between">
      <ul className="grid-cols-auto grid w-4/5 content-start justify-center gap-2 overflow-scroll py-8">
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>

      <div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="mr-3 rounded-lg border border-gray-300 p-1.5"
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="checked">Sort by checked status</option>
        </select>
        <button
          onClick={onClearItems}
          className="rounded-lg bg-blue-500 p-1.5 uppercase text-white hover:bg-blue-700"
        >
          Clear list
        </button>
      </div>
    </div>
  );
}

export default List;
