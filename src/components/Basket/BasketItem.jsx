import React from 'react';

const BasketItem = (props) => {
  const { id, name, price, quantity, removeFromBasket, incQuantity,
    decQuantity } = props;
 
  return ( 
    <>
     <li className="collection-item">
      <span className='font-bold'> "{name}" </span>    x {quantity}{' '} 
       = {price * quantity} руб.
       <i class="material-icons basket-quantity"  onClick={() => decQuantity(id)}>remove</i>
       <i class="material-icons basket-quantity" onClick={() => incQuantity(id)}>add</i>
     <span class="secondary-content" onClick={() => removeFromBasket(id)} >
       <i class="material-icons basket-delete">delete_forever</i>
    </span>
     </li> 
    </>
   );
}
 
export default BasketItem;