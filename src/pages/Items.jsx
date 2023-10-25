import Form from '../features/items/ItemForm';
import List from '../features/items/List';
import ItemsHeading from '../features/items/ItemsHeading';
import Stats from '../features/items/Stats';

function Items() {
  return (
    <div>
      <ItemsHeading />
      <Form />
      <List />
      <Stats />
    </div>
  );
}

export default Items;
