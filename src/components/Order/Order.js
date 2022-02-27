import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/fakedb';
import ReviewItem from '../ReviewItem/ReviewItem';

const Order = () => {
      const [cart,setCart] = useState([]);

      useEffect(()=>{
            const savedCart = getDatabaseCart();
            const productKeys = Object.keys(savedCart);
            const cartProducts = productKeys.map(key =>{
                  const product =fakeData.find(pd => pd.key === key);
                  product.quantity = savedCart[key];

                  return product;
            
            });
            setCart(cartProducts);
            
      },[]);
      return (


            <div>
                  <h1>total order :{cart.length}</h1>
                  {
                        cart.map(pd => <ReviewItem product = {pd} key = {pd.key}></ReviewItem>)
                  }
            </div>
      );
};

export default Order;