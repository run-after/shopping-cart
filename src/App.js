import './styles/reset.css'
import './styles/App.css';
import Home from './components/Home';
import Shop from './components/Shop';
import Nav from './components/Nav';
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
