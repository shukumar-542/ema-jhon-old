import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Products from '../Products/Products';

const ProductDetails = () => {

      const {productKey} = useParams();
      const product =fakeData.find(product => product.key === productKey)
      // console.log(product);
      return (
            <div>
                  <h1>Products Details </h1>
                  <Products showAddToCart ={false} product={product}></Products>
            </div>
      );
};

export default ProductDetails;