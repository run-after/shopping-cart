import React from 'react';
import { Link } from 'react-router-dom';

const Shop = (props) => {
  return (
    <div>
      <div className='cart'>
        <Link to={{pathname: '/cart', cart: props.cart}}>Items: {props.cartQty}</Link>
        <button onClick={()=> alert('This is where we would take you to the checkout screen') }className='checkout'>Checkout</button>
      </div>
      <h1>Shop</h1>
      <div className='store'>
        {props.items.map((x, i) => {
          return (
            <div id={i} key={x.name} className='item-card'>
              {x.name}<br/>
              ${x.cost}<br />
              <img src={x.pic} alt={x.name} />
              <div>
                <input type='number' defaultValue='1' />
                <button onClick={props.addToCart}>Add to cart</button>
              </div>
            </div>
          );
      })}
      </div>
    </div>
    
  );
};

export default Shop;