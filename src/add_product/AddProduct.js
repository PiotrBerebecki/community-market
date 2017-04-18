import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addProduct } from './actions';

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

  handleSubmit(event) {
    event.preventDefault();
    this.props.addProduct(this.state).then(res => {
      this.setState({
        product_name: '',
        price: '',
        image_url: '',
      });
      // console.log('===== res', res.payload.data);
    });
  }

  render() {
    if (this.props.ids.length > 0) {
      console.log('===== obj', this.props.ids[this.props.ids.length - 1]);
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleInput}
          value={this.state.product_name}
          type="text"
          placeholder="product name"
          name="product_name"
        />
        <input
          onChange={this.handleInput}
          value={this.state.price}
          type="text"
          placeholder="product price"
          name="price"
        />
        <input
          onChange={this.handleInput}
          value={this.state.image_url}
          type="text"
          placeholder="product image link"
          name="image_url"
        />
        <input type="submit" />
      </form>
    );
  }
}

const mapStateToProps = state => ({
  ids: state.addProduct,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addProduct }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
