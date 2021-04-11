//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { db } from './firebase'
import Cart from './components/Cart';
import Header from './components/Header'
import Home from './components/Home';
import styled from 'styled-components'

function App() {

  const [cartItems, setCartItems] = useState([]);

  const getCartItems = () => {
    db.collection('cartItems').onSnapshot((snapshot) => {
      console.log(snapshot.docs)
      const tempItems = snapshot.docs.map((doc) =>({
        id: doc.id,
        product: doc.data()
      }))

      setCartItems(tempItems);
    })
  }

  useEffect(() => {
    getCartItems();
  })

  return (
    <Router>
    <Container className="App">
      <Header />
        
      <Switch>
        <Route path="/cart">
          <Cart cartItems={cartItems}/>
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