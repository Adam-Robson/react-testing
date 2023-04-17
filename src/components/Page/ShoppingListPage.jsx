import useShoppingLists from '../../hooks/useShoppingLists.js';
import ShoppingLists from '../ShoppingList/ShoppingLists.jsx';
// hello world
export default function ShoppingListPage() {
  const {
    shoppingLists,
    onCreateShoppingList,
    onCreateShoppingItem,
    onUpdateShoppingItem,
    onDeleteShoppingItem,
  } = useShoppingLists();
  return <article>
    <ShoppingLists
      shoppingLists={shoppingLists}
      onCreateShoppingList={onCreateShoppingList}
      onCreateShoppingItem={onCreateShoppingItem}
      onUpdateShoppingItem={onUpdateShoppingItem}
      onDeleteShoppingItem={onDeleteShoppingItem}
    />
  </article>;
}
