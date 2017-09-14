import React, { Component } from 'react';

class Cart extends Component {

  subtotal() {
    return this.props.cart.reduce((prev, item) => {
      return prev + item.price;
    }, 0);
  }

  render() {
    const { cart } = this.props;

    return (
      <div className="col col-sm-3">
        <h1>Shopping Cart</h1>
        <div className="cart">
          {cart.map((item) =>{
            return <div>{item.name} - {item.price}</div>
          })}
          <div><strong>Subtotal:</strong> {this.subtotal()}</div>
        </div>
      </div>
    );
  }
}

export default Cart;