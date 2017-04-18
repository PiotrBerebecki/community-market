import React, { Component } from 'react';

class AddProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product_name: '',
      price: '',
      image_url: '',
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleInput}
          value={this.state.product_name}
          type="submit"
          placeholder="product name"
          name="product_name"
        />
        <input
          onChange={this.handleInput}
          value={this.state.price}
          type="submit"
          placeholder="product price"
          name="price"
        />
        <input
          onChange={this.handleInput}
          value={this.state.image_url}
          type="submit"
          placeholder="product image link"
          name="image_url"
        />
        <input type="submit" />
      </form>
    );
  }
}

export default AddProduct;
