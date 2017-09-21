import React, { Component } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import FlipCard from 'react-flipcard';
import Cart from './Cart';
import ReactCardFlip from 'react-card-flip';
import Product from './Product';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
      isFlipped: false,
      items: [{
        imageUrl: 'https://ak0.picdn.net/shutterstock/videos/21697270/thumb/1.jpg',
        name: 'Which One?',
        description: 'B',
        points: 100
      }, {
        imageUrl: 'https://ak0.picdn.net/shutterstock/videos/21697270/thumb/1.jpg',
        name: 'Bill Murray!',
        description: 'I am Bill from Space Jam.',
        points: 9.99
      }, {
        imageUrl: 'https://ak0.picdn.net/shutterstock/videos/21697270/thumb/1.jpg',
        name: 'Mystery Box',
        description: '????????',
        points: 59.99
      }, {
        imageUrl: 'https://ak0.picdn.net/shutterstock/videos/21697270/thumb/1.jpg',
        name: 'Kittens!',
        description: 'Kittens are sometimes cute',
        points: 19.99
      }, {
        imageUrl: 'https://ak0.picdn.net/shutterstock/videos/21697270/thumb/1.jpg',
        name: 'CORGIS!',
        description: 'Corgis are cute',
        points: 99.99
      }, {
        imageUrl: 'https://ak0.picdn.net/shutterstock/videos/21697270/thumb/1.jpg',
        name: 'CORGIS!',
        description: 'Corgis are cute',
        points: 99.99
      }, {
        imageUrl: 'https://ak0.picdn.net/shutterstock/videos/21697270/thumb/1.jpg',
        name: 'CORGIS!',
        description: 'Corgis are cute',
        points: 99.99
      }, {
        imageUrl: 'https://ak0.picdn.net/shutterstock/videos/21697270/thumb/1.jpg',
        name: 'CORGIS!',
        description: 'Corgis are cute',
        points: 99.99
      }, {
        imageUrl: 'https://ak0.picdn.net/shutterstock/videos/21697270/thumb/1.jpg',
        name: 'BACON!',
        description: 'Bacon is delish!',
        points: 19.99
      }],
    };

    this.handleFlipCard = this.handleFlipCard.bind(this);
  }

  handleFlipCard(item) {
    console.log("test")
    this.setState({
      cart: this.state.cart.concat(item),
      items: [],
      isFlipped: true
    })
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ isFlipped: !this.state.isFlipped });
  }


  render() {
    return (
 
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <ProductList items={this.state.items} handleFlipCard={this.handleFlipCard} />
            <Cart cart={this.state.cart} />
          </div>
        </div>

      <ReactCardFlip isFlipped={this.state.isFlipped}>
        <Cart key="front" cart={this.state.cart}>
          This is the front of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </Cart>
 
        <Product key="back">
          This is the back of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </Product>
      </ReactCardFlip>

      </div>
    );
  }
}

export default App;

