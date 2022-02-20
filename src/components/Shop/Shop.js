import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
      const first10 = fakeData.slice(0,10);
      const [products, setProducts]=useState(first10);
      const [cart, setCart] = useState([]);

      const handleAddProducts = (product) =>{
            // console.log('products added',product);
            const newProduct = [...cart,product];
            setCart(newProduct);
      }
      return (
            <div className='shop-container'>
                  <div className="products-container">
                        {
                              products.map(product => <Products product={product} handleAddProducts ={handleAddProducts} ></Products>)
                        }
                 
                  </div>
                  <div className="cart-container">
                        <Cart cart ={cart}></Cart>
                  </div>
                  
                 
            </div>
      );
};

export default Shop;