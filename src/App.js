//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Cart from './components/Cart';
import Header from './components/Header'
import Home from './components/Home';
import styled from 'styled-components'

function App() {
  return (
    <Router>
    <Container className="App">
      <Header />
        
      <Switch>
        <Route path="/cart">
          <Cart />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    
    </Container>
    </Router>
  );
}

export default App;

const Container = styled.div`
  background-color: #eaeded;
`