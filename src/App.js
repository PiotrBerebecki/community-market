import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ProductList from './containers/ProductList';
import Product from './containers/Product';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          Welcome to the Community Market
          <Route exact path="/" component={ProductList} />

          <Route
            path="/:slug/:id"
            render={({ match }) => <Product {...match.params} />}
          />

        </div>
      </Router>
    );
  }
}

export default App;
