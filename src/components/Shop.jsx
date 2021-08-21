import React, { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../config";

import Preloader from "./Preloader";
import GoodsList from "./GoodsList";
import Cart from "./Basket/Cart";
import BasketList from "./Basket/BasketList";
import Alert from "./Basket/Alert";

const Shop = () => {
  const [ goods, setGoods ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ order, setOrder ] = useState([]);
  const [ isBasketShow, setBasketShow ] = useState(false);
  const [ alertName,  setAlertName ] = useState('');
  // console.log(order);


  const addToBasket = (item) => { 
    const itemIndex = order.findIndex(
        (orderItem) => orderItem.id === item.id
    );

    if (itemIndex < 0) {
        const newItem = {
            ...item,
            quantity: 1,
        };
        setOrder([...order, newItem]);
    } else {
        const newOrder = order.map((orderItem, index) => {
            if (index === itemIndex) {
                return {
                    ...orderItem,
                    quantity: orderItem.quantity + 1,
                };
            } else {
                return orderItem;
            }
        });

        setOrder(newOrder);
    }
    setAlertName(item.name);
};

const removeFromBasket = (itemId) => {
  const newOrder = order.filter(el => el.id !== itemId);
  setOrder(newOrder);
};

const incQuantity = (itemId) => {
  const newOrder = order.map((el) => {
    if (el.id === itemId) {
      const newQuantity = el.quantity + 1;
      return {
        ...el,
        quantity: newQuantity
      }
    } else {
      return el;
    }
  });
  setOrder(newOrder);
};

const decQuantity = (itemId) => {
  const newOrder = order.map((el) => {
    if (el.id === itemId) {
      const newQuantity = el.quantity - 1;
      return {
        ...el,
        quantity: newQuantity >= 0 ? newQuantity : 0
      }
    } else {
      return el;
    }
  });
  setOrder(newOrder);
};

const handleBasketShow = () => {
  setBasketShow(!isBasketShow);
};

const closeAlert = () => {
  setAlertName('')
};

  const getApi = async () => {
    const response = await fetch(API_URL, {
      headers: {
            //внутри ключ хедерс, для обращения к API
            Authorization: API_KEY, // ключ и значение хедерс
    }});
    const data = await response.json();
    console.log(data.featured); // достучаться до массива
    setGoods(data.featured);
    setLoading(false);
   };

  useEffect(() => {
    getApi();
    // fetch(API_URL, {
    //   headers: {
    //     //внутри ключ хедерс, для обращения к API
    //     Authorization: API_KEY, // ключ и значение хедерс
    //   },
    // })
    //   .then((response) => response.json()) // полученный ответ преобразуй в json
    //   .then((data) => {
    //     // полученные данные
    //     data.featured && setGoods(data.featured); // передаем данные в товары setGoods
    //     setLoading(false); // заканчиваем процедуру загрузки
    //   });
  }, []);

  return (
  <main className="container content">
    <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
    {
      loading ? <Preloader /> : (
        <GoodsList goods={goods} addToBasket={addToBasket} />
      )}
    {
      isBasketShow && <BasketList order={order} handleBasketShow={handleBasketShow} removeFromBasket={removeFromBasket} incQuantity={incQuantity} decQuantity={decQuantity} />
    }
    {
      alertName && <Alert name={alertName} closeAlert={closeAlert} />
    }
    </main>
  );
};

export default Shop;
