import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';
import { Link } from 'react-router-dom';


const Shop = () => {
      const first10 = fakeData.slice(0, 10);
      const [products, setProducts] = useState(first10);
      const [cart, setCart] = useState([]);

      useEffect(() => {
            const saveCart = getDatabaseCart();
            const productKeys = Object.keys(saveCart);
            const previousKeys = productKeys.map(existingKeys => {
                  const products = fakeData.find(pd => pd.key === existingKeys);
                  products.quantity = saveCart[existingKeys];
                  return products
            })
            setCart(previousKeys);
      }, [])

      const handleAddProducts = (product) => {
            // console.log('products added',product);
            const toBeAdded = product.key;
            const sameProduct = cart.find(pd => pd.key === toBeAdded);
            let count = 1;
            let newCart;
            if (sameProduct) {
                  count = sameProduct.quantity + 1;
                  sameProduct.quantity = count;
                  const others = cart.filter(pd => pd.key !== toBeAdded);
                  newCart = [...others, sameProduct];

            }
            else {
                  product.quantity = 1;
                  newCart = [...cart, product]
            }
            setCart(newCart);


            addToDatabaseCart(product.key, count)
      }
      return (
            <div className='shop-container'>
                  <div className="products-container">
                        {
                              products.map(product => <Products showAddToCart={true} product={product} key={product.key} handleAddProducts={handleAddProducts} ></Products>)
                        }

                  </div>
                  <div className="cart-container">
                        <Cart cart={cart}>
                              <Link to='/order'><button className='main-button'>Review Your Order</button></Link>

                        </Cart>
                  </div>


            </div>
      );
};

export default Shop;