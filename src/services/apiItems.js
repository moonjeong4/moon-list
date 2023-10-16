import supabase from './supabase';

export async function getItems() {
  let { data, error } = await supabase.from('items').select('*');

  if (error) {
    console.error(error);
    throw new Error('Items could not be loaded');
  }

  return data;
}

export async function createItem(newItem) {
  const { data, error } = await supabase
    .from('items')
    .insert([newItem])
    .select();

  if (error) {
    console.error(error);
    throw new Error('Items could not be created');
  }

  return data;
}

export async function deleteItem(id) {
  const { data, error } = await supabase.from('items').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Items could not be deleted');
  }

  return data;
}
