import React from 'react';
import './Products.css';
import { BsFillCartFill } from "react-icons/bs";

const Products = (props) => {
      // console.log(props.product);
      const { name, img, seller, price, stock } = props.product;
      return (

            <div className='products'>
                  <div className='products-pic'>
                        <img src={img} alt="" />
                  </div>
                  <div>
                        <h3 className='products-name'>{name}</h3>
                        <p><small>by :{seller}</small></p>
                        <p> $ {price}</p>

                        <p>only {stock} left in stock - order soon</p>
                        <button className='main-button' onClick={ ()=>props.handleAddProducts(props.product)}><BsFillCartFill></BsFillCartFill> Add to Cart </button>
                        
                  </div>
            </div>
      );
};

export default Products;