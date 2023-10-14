export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="flex items-center gap-3 text-xl text-yellow-200">
      <input
        className="h-5 w-5"
        type="checkbox"
        value={item.checked}
        onChange={() => onToggleItem(item.id)}
      />
      <span className={item.checked ? 'line-through' : ''}>
        {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
