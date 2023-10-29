export default function Stats({ listItems, isEnMode }) {
  if (!listItems)
    return (
      <p className="pb-10 pt-4 text-center text-2xl text-yellow-200">
        {isEnMode ? 'Loading..' : 'Charge..'}
      </p>
    );

  if (!listItems.length)
    return (
      <p className="pb-10 pt-4 text-center text-2xl text-yellow-200">
        <em>
          {isEnMode ? 'Start making the list 📝' : 'Commencez à faire 📝'}
        </em>
      </p>
    );

  const numItems = listItems.length;
  const numChecked = listItems.filter((item) => item.checked).length;
  const percentage = Math.round((numChecked / numItems) * 100);

  return (
    <footer className="pb-10 pt-4 text-center text-2xl text-yellow-200">
      <em>
        {percentage === 100
          ? isEnMode
            ? 'You got everything!'
            : 'Vous avez tout !'
          : isEnMode
          ? `${numItems} things, cleared ${numChecked} (${percentage}%)`
          : `${numItems} choses, effacé ${numChecked} (${percentage}%)`}
      </em>
    </footer>
  );
}
