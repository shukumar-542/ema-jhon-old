import React from 'react';

const ReviewItem = (props) => {
      // console.log(props);
      const {name,quantity,key,price} = props.product
      const reviewItemStyle = {
            borderBottom :'1px solid lightgray',
            paddingBottom :'10px',
           
            
      
            

      }
      return (
            <div style={reviewItemStyle} >
            
            <h4 className='products-name'>{name}</h4>
            <p> Quantity :{quantity}</p>
            <p> $ {price}</p>
            <button className='main-button' onClick={()=>props.removeItem(key)}>Remove</button>
                  
            </div>
      );
};

export default ReviewItem;