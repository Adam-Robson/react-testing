export default function ShoppingListItem({ 
  onUpdateShoppingItem,
  onDeleteShoppingItem,
  shoppingItem 
}) {
  return (
    <>
      <input 
        data-testid="shopping-list-item-checkbox"
        type="checkbox" 
        onChange={ () => {
          return onUpdateShoppingItem(!shoppingItem.item_checked);
        } } />

      <button
        type="button"
        onClick={ async () => {
          await onDeleteShoppingItem(shoppingItem.item_id);
        } }>delete</button>
    </>
  );
}
