import { createShoppingListItem } from '../../services/shopping-list-items';

export default function ShoppingListItemForm(item) {
  const setItemName = (item, item_name) => {
    item_name === item.item_name || 'no-item-name';
  };
  const setItemQty = (item, item_qty) => {
    item_qty === item.item_qty || 'no-item-qty';
  };
  const handleSubmit = async (item) => {
    const res = await createShoppingListItem(item);
    return res;
  };
  return (
    <>
      <form onSubmit={
        (e) => {
          e.preventDefault();
          handleSubmit(item);
        } }>
        <input 
          data-testid={'shopping-list-form-item'}
          type="text" 
          placeholder="Enter item name" 
          value={ item.item_name } 
          onChange={ (e) => {
            setItemName(e.target.value); 
          } }  />
        <input 
          type="number" 
          placeholder="Enter item qty" 
          value={ item.item_qty } 
          onChange={ (e) => {
            setItemQty(e.target.value); 
          } }  />
        <button type="submit">submit</button>
      </form>
    </>
  );
}
