import supabase from './supabase';

export async function getItems(user) {
  let { data, error } = await supabase
    .from('items')
    .select('*')
    .eq('userId', user.id);

  if (error) {
    console.error(error);
    throw new Error('Items could not be loaded');
  }

  return data;
}

export async function createEditItem(newItem, id) {
  let query = supabase.from('items');

  if (!id) query = query.insert([newItem]);

  if (id) query = query.update(newItem).eq('id', id);

  const { data, error } = await query.select();

  if (error) {
    console.error(error);
    throw new Error('Items could not be created');
  }

  return data;
}

export async function deleteItem(id) {
  if (typeof id === 'number') {
    const { data, error } = await supabase.from('items').delete().eq('id', id);

    if (error) {
      console.error(error);
      throw new Error('The item could not be deleted');
    }

    return data;
  }

  if (Array.isArray(id)) {
    if (id.length === 0) throw new Error("There's no checked items.");

    const { data, error } = await supabase.from('items').delete().in('id', id);

    if (error) {
      console.error(error);
      throw new Error('Items could not be deleted');
    }

    return data;
  }

  if (typeof id === 'string') {
    const { data, error } = await supabase
      .from('items')
      .delete()
      .eq('userId', id);

    if (error) {
      console.error(error);
      throw new Error('Items could not be deleted');
    }

    return data;
  }
}
