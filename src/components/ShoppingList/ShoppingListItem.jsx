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
          return onUpdateShoppingItem(!shoppingItem.checked);
        } } />

      <button
        type="button"
        onClick={ async () => {
          await onDeleteShoppingItem(shoppingItem.id);
        } }>delete</button>
    </>
  );
}
