import React, { Component } from 'react';
import './App.css';
import ProductList from './containers/ProductList';

class App extends Component {
  render() {
    return (
      <div className="App">
        Welcome to the Community Market
        <ProductList />
      </div>
    );
  }
}

export default App;
