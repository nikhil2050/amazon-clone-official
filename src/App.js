//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Cart from './components/Cart';
import Header from './components/Header'
import Home from './components/Home';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
        
      <Switch>
        <Route path="/cart">
          <Cart />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
