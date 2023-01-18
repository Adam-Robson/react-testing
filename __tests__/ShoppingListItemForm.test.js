// import react-testing methods
import { render, screen } from '@testing-library/react';
import 
ShoppingListItemForm 
  from '../src/components/ShoppingList/ShoppingListItemForm.jsx';

describe('shopping list item form', () => {
  test('renders input for description of item', () => {
    render(<ShoppingListItemForm></ShoppingListItemForm>);
    expect(screen.getByTestId('shopping-list-form-item'))
      .toHaveAttribute('placeholder', 'Enter item name');
  });
});
