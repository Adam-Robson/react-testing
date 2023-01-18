import { 
  screen,
  render
} from '@testing-library/react';
import ShoppingListItem from '../src/components/ShoppingList/ShoppingListItem';
describe('shopping list item', () => {
  test('creates a new checkbox', () => {
    render (<ShoppingListItem  />);
    expect(screen.getByTestId('shopping-list-item-checkbox'))
      .toHaveAttribute('type', 'checkbox');
  });
});
