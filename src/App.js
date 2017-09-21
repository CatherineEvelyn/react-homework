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
    this.setState({
      cart: this.state.cart.concat(item),
      isFlipped: !this.state.isFlipped
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
            <ReactCardFlip isFlipped={this.state.isFlipped}>
              <ProductList key="front" items={this.state.items} handleFlipCard={this.handleFlipCard}>
                This is the front of the card.
                <button onClick={this.handleClick}>Click to flip</button>
              </ProductList>
      
              <Cart key="back" cart={this.state.cart} handleFlipCard={this.handleFlipCard}>
                This is the back of the card.
                <button onClick={this.handleClick}>Click to flip</button>
              </Cart>
            </ReactCardFlip>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

