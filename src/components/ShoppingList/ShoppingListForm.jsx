import { useState } from 'react';

const defaultShoppingList = {
  id: null,
  list_name: '',
  shoppingItems: [],
};

export default function ShoppingListForm({ id, shoppingList, onSubmit }) {
  const [
    currentShoppingList,
    setCurrentShoppingList,
  ] = useState(shoppingList || defaultShoppingList);
  return <form
    data-testid={`shopping-list-form-${id}`}
    onSubmit={(e) => {
      e.preventDefault();
      onSubmit(currentShoppingList);
      setCurrentShoppingList(defaultShoppingList);
    }}
  >
    <input
      data-testid={`shopping-list-form-name-${id}`}
      value={currentShoppingList.list_name}
      onChange={(e) => setCurrentShoppingList({
        ...currentShoppingList,
        list_name: e.target.value,
      })}
    />
    <button
      type="submit"
      data-testid={`shopping-list-form-submit-button-${id}`}
    >
      submit
    </button>
  </form>;
}
