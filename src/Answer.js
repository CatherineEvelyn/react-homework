import React, { Component } from 'react';
import "./index.css";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.handleClickBack = this.handleClickBack.bind(this);
  }

  handleClickBack(event) {
    this.props.handleFlipCardBack(this.props);
  }

  subtotal(cart) {
    let score = 0;
    for (let i=0; i < cart.length; i++) {
      let x = cart[i];
      score = score + x.points
    }
    return score
  }

  render() {
    const { cart, tempCardData } = this.props;
    let x = tempCardData[0];

    return (
      <div className="card" id="back-of-card">
        <div className="cart">

            <div>{x.question} Points: {x.points}</div>

          <div><strong>Total Score:</strong> {this.subtotal(cart)}</div>
          <div className="btn btn-primary btn-lg" onClick={this.handleClickBack}>Flip this card</div>
        </div>
      </div>
    );
  }
}

export default Cart;