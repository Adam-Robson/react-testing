import { 
  screen,
  render
} from '@testing-library/react';
import ShoppingListForm from '../src/components/ShoppingList/ShoppingListForm';

describe('shopping lists', () => {
  test('renders component', () => {
    render (<ShoppingListForm></ShoppingListForm>);
    expect(screen.getByText('submit'))
      .toBeTruthy();
  });
});
