import { useItems } from './useItems';

export default function Stats() {
  const { listItems } = useItems();

  if (!listItems)
    return (
      <p className="mb-2 mr-4 text-center text-2xl text-yellow-200 ">
        Loading..
      </p>
    );

  if (!listItems.length)
    return (
      <p className="mb-2 mr-4 text-center text-2xl text-yellow-200 ">
        <em>Start making the list 📝</em>
      </p>
    );

  const numItems = listItems.length;
  const numChecked = listItems.filter((item) => item.checked).length;
  const percentage = Math.round((numChecked / numItems) * 100);

  return (
    <footer className="mb-2 mr-4 text-center text-2xl text-yellow-200 ">
      <em>
        {percentage === 100
          ? 'You got everything!'
          : `${numItems} items, cleared ${numChecked} (${percentage}%)`}
      </em>
    </footer>
  );
}
