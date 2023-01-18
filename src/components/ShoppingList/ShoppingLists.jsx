import ShoppingList from './ShoppingList.jsx';
import ShoppingListForm from './ShoppingListForm.jsx';

export default function ShoppingLists({
  onCreateShoppingList,
  onCreateShoppingItem,
  onUpdateShoppingItem,
  onDeleteShoppingItem,
  shoppingLists,
}) {
  return <div>
    <ShoppingListForm 
      id="new" 
      data-testid="list-form" 
      onSubmit={onCreateShoppingList} />
    <ol data-testid="shopping-lists" className="shopping-lists">
      {shoppingLists.map(shoppingList => {
        return <li key={shoppingList.id}>
          <ShoppingList
            data-testid="shopping-list-item"
            onCreateShoppingItem={onCreateShoppingItem}
            onUpdateShoppingItem={onUpdateShoppingItem}
            onDeleteShoppingItem={onDeleteShoppingItem}
            shoppingList={shoppingList}
          />
        </li>;
      })}
    </ol>
  </div>;
}
