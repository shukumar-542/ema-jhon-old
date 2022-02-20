import React from 'react';
import './Cart.css';

const Cart = (props) => {
      const cart = props.cart
      // console.log(cart);
      // const total = cart.reduce((total , prod)=> total + prod.price,0);
      let total = 0;
      for(let i=0;i<cart.length;i++){
            const product = cart[i];
            total = total + product.price;
      }
      let shipping = 0;

      if(total >100){
            shipping = 20;
      }
      else if(total >50){
            shipping = 15;
      }
      else if(total >0){
            shipping = 10;
      }
      const tax = total /10;

      const formatNumber = (num) =>{
            const precision = num.toFixed(0);
            return Number(precision);
      }

      return (
            <div>
                 <h2>Order Summery</h2> 
                 <h5>Items Ordered :$ {cart.length}</h5>
                 <p>Products Price :$  {total}</p>
                 <p><small>Shipping Cost :$ {shipping}</small></p>
                 <p><small>Tax + Vat :$ {tax} </small></p>
                 <p className='price'>Total Price : $ {formatNumber(total +shipping)}</p>
                 <button className='main-button'>Review Your Order</button>
            </div>
      );
};

export default Cart;