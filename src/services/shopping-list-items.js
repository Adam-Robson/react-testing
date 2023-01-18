import { client, checkError } from './client.js';

export async function getShoppingListItemsByShoppingListId(shoppingList) {
  const response = await client
    .from('shopping-lists')
    .select('*')
    .eq('list_id', shoppingList.id)
    .order('created_at', { ascending: false })
  ;
  const shoppingListItems = checkError(response);
  return shoppingListItems;
}

export async function createShoppingListItem(shoppingListItem) {
  const response = await client
    .from('shopping-lists')
    .insert(shoppingListItem)
    .select()
  ;
  return checkError(response);
}


export async function updateShoppingListItem(shoppingListItem) {
  const response = await client
    .from('shopping-lists')
    .update(shoppingListItem)
    .eq('id', shoppingListItem.id)
  ;
  return checkError(response);
}

export async function deleteShoppingListItem(shoppingListItemId) {
  const response = await client
    .from('shopping-lists')
    .delete()
    .eq('id', shoppingListItemId)
  ;
  return checkError(response);
}
