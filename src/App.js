import React, { Component } from 'react';
import './App.css';
import ProductList from './containers/ProductList';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          Welcome to the Community Market
          <Route path="/tv" render={() => <h1>TV</h1>}/>
          <Route exact path="/" component={ProductList}/>
          </div>
        </Router>
    );
  }
}

export default App;
