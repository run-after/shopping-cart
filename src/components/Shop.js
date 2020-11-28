import React from 'react';
import { useState } from 'react';

const Shop = () => {

  const [cartQty, setCartQty] = useState(0);

  const [cart, setCart] = useState([]);

  const items = [{
    name: 'Fire Extinguisher',
    pic: 'https://images.homedepot-static.com/productImages/920fe75c-471f-4aea-ac1e-9e442fd73d06/svn/kidde-fire-extinguishers-21026946p-64_1000.jpg',
    cost: 40,
    qty: 0
    },
    {
      name: 'Dog Bed',
      pic: 'https://4.bp.blogspot.com/-2Pr3neOoJqk/VYp8zpmqJTI/AAAAAAAABzo/d3k6lNNi2qw/s1600/pet%2Bbed.jpg',
      cost: 18,
      qty: 0
    },
    {
      name: 'Tool Bag',
      pic: 'https://www.kleintools.com/sites/all/product_assets/catalog_imagery/klein/5541718_14_alt1.jpg',
      cost: 80,
      qty: 0
    },
    {
      name: 'Tinfoil Hat',
      pic: 'https://i2.wp.com/media.boingboing.net/wp-content/uploads/2018/03/Tin-Foil-Hat-for-Humans-by-Archie-McPhee.jpg?fit=600,600&ssl=1',
      cost: 10,
      qty: 0
    }
  ];

  const addToCart = (e) => {
    const itemID = e.target.parentNode.parentNode.id;
    // Number from input
    const number = Number(e.target.parentNode.firstChild.value); 
    items[itemID].qty = number;
    setCart(cart.concat(items[itemID]));
    
    setCartQty(cartQty + number);
    e.target.parentNode.firstChild.value = 1;
  };

  return (
    <div>
      <div className='cart'>
        Items: {cartQty}
        <button onClick={()=> alert('This is where we would take you to the checkout screen') }className='checkout'>Checkout</button>
      </div>
      <h1>Shop</h1>
      <div className='store'>
        {items.map((x, i) => {
          return (
            <div id={i} key={x.name} className='item-card'>
              {x.name}<br/>
              ${x.cost}<br />
              <img src={x.pic} alt={x.name} />
              <div>
                <input type='number' defaultValue='1' />
                <button onClick={addToCart}>Add to cart</button>
              </div>
            </div>
          );
      })}
      </div>
    </div>
    
  );
};

export default Shop;