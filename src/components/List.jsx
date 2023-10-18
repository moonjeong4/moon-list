import { useState } from 'react';
import Item from './Item';
import Spinner from '../ui/Spinner';
import { useItems } from './useItems';

function List() {
  const [sortBy, setSortBy] = useState('input');

  const { isLoading, listItems } = useItems(); // can reuse like this in anywhere!

  if (isLoading) return <Spinner />;
  console.log(listItems);

  // let sortedItems;

  // if (sortBy === 'input') sortedItems = items;

  // if (sortBy === 'description')
  //   sortedItems = items
  //     .slice()
  //     .sort((a, b) => a.description.localeCompare(b.description));

  // if (sortBy === 'checked')
  //   sortedItems = items
  //     .slice()
  //     .sort((a, b) => Number(a.checked) - Number(b.checked));

  return (
    <div className="max-h-higher mb-2 flex flex-col items-center justify-between overflow-y-auto">
      <ul className="grid-cols-auto grid w-4/5 content-start justify-center gap-5 overflow-scroll py-8">
        {listItems.map((item) => (
          <Item item={item} key={item.id} />
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
          // onClick={onClearItems}
          className="rounded-lg bg-blue-500 p-1.5 uppercase text-white hover:bg-blue-700"
        >
          Clear list
        </button>
      </div>
    </div>
  );

  // return (
  //   <div>
  //     {listItems.map((listItem) => (
  //       <div key={listItem.id}>{listItem.description}</div>
  //     ))}
  //   </div>
  // );
}

export default List;
