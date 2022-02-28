import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'
import happyImage from '../../images/giphy.gif'

const Order = () => {
      const [cart, setCart] = useState([]);

      const [placeOrder, setPlaceOrder] = useState(false);

      const removeItem = (keys) => {
            // console.log('clcike removed',keys);
            const removeProduct = cart.filter(pd => pd.key !== keys)
            setCart(removeProduct);
            removeFromDatabaseCart(keys);
      }

      const handlePalceButton = () => {
            setCart([]);
            setPlaceOrder(true);
            processOrder()
            // console.log('order palced');
      }

      useEffect(() => {
            const savedCart = getDatabaseCart();
            const productKeys = Object.keys(savedCart);
            const cartProducts = productKeys.map(key => {
                  const product = fakeData.find(pd => pd.key === key);
                  product.quantity = savedCart[key];

                  return product;

            });
            setCart(cartProducts);

      }, []);

      let thankyou;
      if (placeOrder) {
            thankyou = <img src={happyImage} alt="" />
      };
      return (


            <div className='review-container'>
                  <div className='review-item-container'>
                        {
                              cart.map(pd => <ReviewItem
                                    product={pd} key={pd.key}
                                    removeItem={removeItem}></ReviewItem>)
                        }
                        {thankyou}
                  </div>

                  <div className='review-cart'>
                        <Cart cart={cart}>
                              <button className='main-button' onClick={handlePalceButton}>Place Your Order</button>
                        </Cart>
                  </div>
            </div>
      );
};

export default Order;