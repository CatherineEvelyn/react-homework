import React, { Component } from 'react';
import Product from './Product'

class ProductList extends Component {
  render() {
    const { items, handleFlipCard } = this.props;

    return (
      <div className="col">
        <h1 id="title">Today's topic: Culinary</h1>
        <div className="row">
          {items.map((it, index) => {
            return <Product key={index} {...it} handleFlipCard={handleFlipCard}>{it.name}</Product>;
          })}
        </div>
      </div>
    );
  }
}

export default ProductList;