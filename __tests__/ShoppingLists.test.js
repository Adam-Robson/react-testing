import { screen, render } from '@testing-library/react';
import ShoppingLists from '../src/components/ShoppingList/ShoppingLists';
describe('shopping lists', () => {
  test('renders data', () => {
    const shoppingLists = [
      { id: '1', name: 'List 1' }, 
      { id: '2', name: 'List 2' }
    ];
    render(<ShoppingLists 
      shoppingLists={ shoppingLists } />);
    expect(screen.getByTestId('shopping-lists').children.length).toBe(2);
  });
});
