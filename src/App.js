import './reset.css'
import './App.css';
import Home from './Home';
import Shop from './Shop';
import Nav from './Nav';
import { BrowserRouter, Switch, Route } from 'react-router-dom';;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/shop' component={Shop} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
