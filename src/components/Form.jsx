import { useState } from 'react';

function Form({ onAddItems }) {
  const [description, setDescription] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, checked: false, id: Date.now() };
    // console.log(newItem);

    onAddItems(newItem);

    setDescription('');
  }

  return (
    <form onSubmit={handleSubmit} className="text-center">
      <h3 className="mb-2 mr-4 text-2xl text-yellow-200">
        Add it to the list. 📋
      </h3>
      <input
        className="mr-3 rounded-lg border border-gray-300 p-1"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="item (your name) please"
      />
      <button className="rounded-lg bg-blue-500 p-1.5 uppercase text-white hover:bg-blue-700">
        Add
      </button>
    </form>
  );
}

export default Form;
