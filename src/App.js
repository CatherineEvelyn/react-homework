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
      tempCardData: [{
        imageUrl: 'https://ak0.picdn.net/shutterstock/videos/21697270/thumb/1.jpg',
        question: 'XXXXX?',
        answer: 'B',
        points: 100
      }], 
      isFlipped: false,
      items: [{
        imageUrl: 'https://ak0.picdn.net/shutterstock/videos/21697270/thumb/1.jpg',
        question: 'Which One?',
        answer: 'B',
        points: 100
      }, {
        imageUrl: 'https://ak0.picdn.net/shutterstock/videos/21697270/thumb/1.jpg',
        question: 'Which One?',
        answer: 'I am Bill from Space Jam.',
        points: 200
      }, {
        imageUrl: 'https://ak0.picdn.net/shutterstock/videos/21697270/thumb/1.jpg',
        question: 'Mystery Box',
        answer: '????????',
        points: 300
      }, {
        imageUrl: 'https://ak0.picdn.net/shutterstock/videos/21697270/thumb/1.jpg',
        question: 'Kittens!',
        answer: 'Kittens are sometimes cute',
        points: 400
      }, {
        imageUrl: 'https://ak0.picdn.net/shutterstock/videos/21697270/thumb/1.jpg',
        question: 'CORGIS!',
        answer: 'Corgis are cute',
        points: 500
      }, {
        imageUrl: 'https://ak0.picdn.net/shutterstock/videos/21697270/thumb/1.jpg',
        question: 'CORGIS!',
        answer: 'Corgis are cute',
        points: 600
      }, {
        imageUrl: 'https://ak0.picdn.net/shutterstock/videos/21697270/thumb/1.jpg',
        question: 'CORGIS!',
        answer: 'Corgis are cute',
        points: 700
      }, {
        imageUrl: 'https://ak0.picdn.net/shutterstock/videos/21697270/thumb/1.jpg',
        question: 'CORGIS!',
        answer: 'Corgis are cute',
        points: 800
      }, {
        imageUrl: 'https://ak0.picdn.net/shutterstock/videos/21697270/thumb/1.jpg',
        question: 'BACON!',
        answer: 'Bacon is delish!',
        points: 900
      }],
    };

    this.handleFlipCard = this.handleFlipCard.bind(this);
    this.handleFlipCardBack = this.handleFlipCardBack.bind(this);
  }

  handleFlipCard(item) {
    let y = [];
    y.push(item);

    this.setState({
      cart: this.state.cart.concat(item),
      tempCardData: y,
      isFlipped: !this.state.isFlipped
    })
  }

  handleFlipCardBack(item) {
    this.setState({
      isFlipped: !this.state.isFlipped
    })
  }

  render() {
    return (
 
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <ReactCardFlip isFlipped={this.state.isFlipped}>
              <ProductList key="front" items={this.state.items} handleFlipCard={this.handleFlipCard} />
              <Cart key="back" tempCardData={this.state.tempCardData} cart={this.state.cart} handleFlipCardBack={this.handleFlipCardBack} />
            </ReactCardFlip>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

