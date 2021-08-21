import React from 'react';

const GoodItem = (props) => {
  const {
    id,
    name,
    description,
    price,
    full_background,
    addToBasket  = Function.prototype,
  } = props;

  return ( 
                    <div className='card'>
                    
                    <div className='card-image'>
                    < img src={full_background} alt={name} />
        </div>
  <div className='card-content'>
  <span className='card-title'>{name}</span>
  <p>{description}</p>
</div>
<div className='card-action'>
  <button
      className='btn  orange'
     onClick={() => addToBasket({
         id, name, price
     })}
  >
      Купить
  </button>
  <span className='right' style={{ fontSize: '1.6rem' }}>
      {price} руб.
  </span>
</div>
        
</div>
            
      
   );
}
 
export default GoodItem;