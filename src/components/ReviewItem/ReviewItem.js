import React from 'react';

const ReviewItem = (props) => {
      console.log(props);
      const {name,quantity} = props.product
      const reviewItemStyle = {
            border :'1px solid lightgray',
            paddingBottom : '10px',
            marginLeft : '200px',
            paddingLeft : '5px',
            marginBottom : '5px',
            marginRight : '100px',

      }
      return (
            <div style={reviewItemStyle} >
            
            <h4 className='products-name'>{name}</h4>
            <p> Quantity :{quantity}</p>
            <button className='main-button'>Remove</button>
                  
            </div>
      );
};

export default ReviewItem;