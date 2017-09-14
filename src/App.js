import React, { Component } from 'react';
import Header from './Header';
import ProductList from './ProductList';
//import Cart from './Cart';
import FlipCard from 'react-flipcard';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
      isFlipped: false,
      items: [{
        imageUrl: 'https://ak0.picdn.net/shutterstock/videos/21697270/thumb/1.jpg',
        question: 'Which One?',
        answer: 'B',
        points: 100
      }, {
        imageUrl: 'https://ak0.picdn.net/shutterstock/videos/21697270/thumb/1.jpg',
        name: 'Bill Murray!',
        description: 'I am Bill from Space Jam.',
        price: 9.99
      }, {
        imageUrl: 'https://ak0.picdn.net/shutterstock/videos/21697270/thumb/1.jpg',
        name: 'Mystery Box',
        description: '????????',
        price: 59.99
      }, {
        imageUrl: 'https://ak0.picdn.net/shutterstock/videos/21697270/thumb/1.jpg',
        name: 'Kittens!',
        description: 'Kittens are sometimes cute',
        price: 19.99
      }, {
        imageUrl: 'https://ak0.picdn.net/shutterstock/videos/21697270/thumb/1.jpg',
        name: 'CORGIS!',
        description: 'Corgis are cute',
        price: 99.99
      }, {
        imageUrl: 'https://ak0.picdn.net/shutterstock/videos/21697270/thumb/1.jpg',
        name: 'CORGIS!',
        description: 'Corgis are cute',
        price: 99.99
      }, {
        imageUrl: 'https://ak0.picdn.net/shutterstock/videos/21697270/thumb/1.jpg',
        name: 'CORGIS!',
        description: 'Corgis are cute',
        price: 99.99
      }, {
        imageUrl: 'https://ak0.picdn.net/shutterstock/videos/21697270/thumb/1.jpg',
        name: 'CORGIS!',
        description: 'Corgis are cute',
        price: 99.99
      }, {
        imageUrl: 'https://ak0.picdn.net/shutterstock/videos/21697270/thumb/1.jpg',
        name: 'BACON!',
        description: 'Bacon is delish!',
        price: 19.99
      }]
    };

    this.handleFlipCard = this.handleFlipCard.bind(this);
  }

  handleFlipCard(item) {

  }
 /* showBack() {
    this.setState({
      isFlipped: true
    });
  }

  showFront() {
    this.setState({
      isFlipped: false
    });
  }

  handleOnFlip(flipped) {
    if (flipped) {
      this.refs.backButton.getDOMNode().focus();
    }
  }

  handleKeyDown(e) {
    if (this.state.isFlipped && e.keyCode === 27) {
      this.showFront();
    }
  }*/

  render() {
    return (
 
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <ProductList items={this.state.items} handleFlipCard={this.handleFlipCard} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;


  /*
      <div id="container" className="App">
        <div className="App-intro">
          <div className="title-space">
          </div>
          <div className="title"> Topic A
          </div>
          <div className="title-space">
          </div>
          <div className="title"> Topic B
          </div>
          <div className="title-space">
          </div>
          <div className="title"> Topic C
          </div>
          <div className="white-bar">
          </div>
        </div>

        <div className="App-intro">
          <div className="space">
          </div>
          <div className="box" onClick={this.handleClick}>
          </div>
          <div className="space">
          </div>
          <div className="box" onClick={this.handleClick}>
          </div>
          <div className="space">
          </div>
          <div className="box" onClick={this.handleClick}>
          </div>
          <div className="white-bar">
          </div>
        </div>
        
        <div className="App-intro">
          <div className="space">
          </div>
          <div className="box" onClick={this.handleClick}>
          </div>
          <div className="space">
          </div>
          <div className="box" onClick={this.handleClick}>
          </div>
          <div className="space">
          </div>
          <div className="box" onClick={this.handleClick}>
          </div>
          <div className="white-bar">
          </div>
        </div>

        <div className="App-intro">
          <div className="space">
          </div>
          <div className="box" onClick={this.handleClick}>
          </div>
          <div className="space">
          </div>
          <div className="box" onClick={this.handleClick}>
          </div>
          <div className="space">
          </div>
          <div className="box" onClick={this.handleClick}>
          </div>
          <div className="white-bar">
          </div>
        </div>

      </div>
    );
  }
}*/
