import React from 'react';

const Cart = (props) => {

  const cartItems = props.location.cart;  
  
  if (Object.keys(cartItems).length > 0) {
    return (
      <div>
        <h1>Cart</h1>
        
        {Object.keys(cartItems).map((x) => {
  
            return (
              <div id={cartItems[x].name} key={cartItems[x].name} className='item-card'>
                {cartItems[x].name}<br/>
                ${cartItems[x].cost}<br />
                <img src={cartItems[x].pic} alt={cartItems[x].name} />
                qty {cartItems[x].qty}
              </div>
            );
        })
        
        
        /*cartItems.map((x, i) => {
            return (
              <div id={i} key={x.name} className='item-card'>
                {x.name}<br/>
                ${x.cost}<br />
                <img src={x.pic} alt={x.name} />
                qty {x.qty}
              </div>
            );
        })*/}
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

// very sloppy if/else statement, but it works
// should check if cart.includes(whatever) to add to qty