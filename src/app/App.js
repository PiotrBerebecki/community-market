import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import ProductList from './../products/containers/ProductList';
import Product from './../products/containers/Product';
import AddProduct from './../add_product/AddProduct';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>Welcome to the Community Market</h1>
          <Link to="/add-product">Add A Product</Link>
          <Route exact path="/" component={ProductList} />

          <Route
            path="/:slug/:id"
            render={({ match }) => <Product {...match.params} />}
          />
          <Route
            path="/add-product"
            render={({ match }) => <AddProduct {...match.params} />}
          />

        </div>
      </Router>
    );
  }
}

export default App;
