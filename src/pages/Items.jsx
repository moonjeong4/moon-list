import Form from '../features/items/Form';
import List from '../features/items/List';
import ItemsHeading from '../features/items/ItemsHeading';
import Stats from '../features/items/Stats';

function Items() {
  return (
    <div className="h-[100vh] bg-sky-950">
      <ItemsHeading />
      <Form />
      <List />
      <Stats />
    </div>
  );
}

export default Items;
