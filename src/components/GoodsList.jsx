import React from 'react';
import GoodItem from './GoodsItem';

const GoodsList = (props) => {
  const { goods = [], addToBasket = Function.prototype } = props;

  if (!goods.length) {
   return <h3>Товаров нет</h3>
  }

  return <div className="goods">
    {goods.map((item) => (
      <GoodItem key={item.id} {...item} addToBasket={addToBasket} />
    ))}
  </div>

}
 
export default GoodsList;