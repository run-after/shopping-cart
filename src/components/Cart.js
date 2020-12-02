import React from 'react';

const Cart = (props) => {

  const cartItems = props.location.cart;

  if (Object.keys(cartItems).length > 0) {
    return (
      <div>
        <h1>Cart</h1>
        <div className='cart' key='cart'>
        
        {Object.keys(cartItems).map((x) => {
  
          return (
              
            <div id={cartItems[x].id} key={cartItems[x].name} className='item-card'>
              {cartItems[x].name}<br />
              ${cartItems[x].cost}<br />
              <img src={cartItems[x].pic} alt={cartItems[x].name} />
              qty {cartItems[x].qty}
            </div>
              
            );
        })}
        </div>
      </div>
    
    );
  } else {
      return (
        <div>
          <h1>Cart</h1>
          Empty
        </div>
      );
  };
};

export default Cart;
// change if/else statement to be cleaner