import React, { Component } from 'react';
import Card from './Card'

class Front extends Component {
  render() {
    const { cards, handleFlipCard } = this.props;

    return (
      <div className="col">
        <h1 id="title">Today's topic: Culinary</h1>
        <div className="row">
          {cards.map((it, index) => {
            return <Card key={index} {...it} handleFlipCard={handleFlipCard}>{it.name}</Card>;
          })}
        </div>
      </div>
    );
  }
}

export default Front;