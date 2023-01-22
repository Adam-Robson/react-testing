export default function ShoppingListItem({ 
  onUpdateShoppingItem,
  onDeleteShoppingItem,
  shoppingItem 
}) {
  return (
    <>
      <form>
        <input 
          data-testid="shopping-list-item-text"
          type="text" 
          onChange={ () => {
            return onUpdateShoppingItem(shoppingItem);
          } } />

        <button
          type="button"
          onClick={ async () => {
            await onDeleteShoppingItem(shoppingItem.id);
          } }>delete</button>
      </form>
    </>
  );
}
