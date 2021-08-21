import React from 'react';
import BasketItem from './BasketItem';

const BasketList = (props) => {
  const { order=[], handleBasketShow, removeFromBasket, incQuantity, decQuantity } = props;

  const totalPrice = order.reduce((sum, elem) => {
    return sum + elem.price * elem.quantity
  } , 0);

  return ( 
    <ul className="collection basket-list ">
    <li className="collection-item active cyan darken-1"><h4>Корзина</h4></li>
    {
      order.length ? order.map((item) => (
          <BasketItem key={item.id} {...item} removeFromBasket={removeFromBasket} incQuantity={incQuantity} decQuantity={decQuantity} />
        )) :  <li className="collection-item">Корзина пуста</li>
    }
    <li className="collection-item"><span className='font-bold'> Общая стоимость:</span> {totalPrice} руб. 
    </li>
    <li className="collection-item">
      <button className="btn btn-small">Оформить</button>
    </li>
    <i className='material-icons basket-close' onClick={handleBasketShow}>close</i>
  </ul> 
   ); 
}
 
export default BasketList;