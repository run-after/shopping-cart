import './styles/reset.css'
import './styles/App.css';
import Home from './components/Home';
import Shop from './components/Shop';
import Nav from './components/Nav';
import Cart from './components/Cart';
import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';;

function App() {

  const items = [{
      name: 'Fire Extinguisher',
      pic: 'https://images.homedepot-static.com/productImages/920fe75c-471f-4aea-ac1e-9e442fd73d06/svn/kidde-fire-extinguishers-21026946p-64_1000.jpg',
      cost: 40
    },
    {
      name: 'Dog Bed',
      pic: 'https://4.bp.blogspot.com/-2Pr3neOoJqk/VYp8zpmqJTI/AAAAAAAABzo/d3k6lNNi2qw/s1600/pet%2Bbed.jpg',
      cost: 18
    },
    {
      name: 'Tool Bag',
      pic: 'https://www.kleintools.com/sites/all/product_assets/catalog_imagery/klein/5541718_14_alt1.jpg',
      cost: 80
    },
    {
      name: 'Tinfoil Hat',
      pic: 'https://i2.wp.com/media.boingboing.net/wp-content/uploads/2018/03/Tin-Foil-Hat-for-Humans-by-Archie-McPhee.jpg?fit=600,600&ssl=1',
      cost: 10
    }
  ];
  
  const [cartQty, setCartQty] = useState(0);

  const [cart, setCart] = useState({});

  const addToCart = (e) => {
    const itemID = e.target.parentNode.parentNode.id;
    // Number from input
    const number = Number(e.target.parentNode.firstChild.value);
    if (!(items[itemID].name in cart)) {
      setCart(prevState => ({
        ...prevState,
        [items[itemID].name]: {
          name: items[itemID].name,
          pic: items[itemID].pic,
          cost: items[itemID].cost,
          qty: number
        }
      }));  
    } else {
      cart[items[itemID].name].qty += number;
    };

    setCartQty(cartQty + number);
    
    e.target.parentNode.firstChild.value = 1;
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/shop'
            render={(props) =>
              <Shop {...props}
                items={items}
                cart={cart}
                cartQty={cartQty}
                addToCart={addToCart}
              />}
          />
          <Route path='/cart' component={Cart} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
