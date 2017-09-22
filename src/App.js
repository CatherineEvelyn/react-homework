import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import Header from './Header';
import Front from './Front';
import Back from './Back';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCards: [],
      showAnswer: [],
      tempCardData: [{
        subject: 'BACON!',
        question: 'XXXXX?',
        answer: 'B',
        points: 100
      }], 
      isFlipped: false,
      cards: [{
        subject: 'BACON!',
        question: 'Which One?',
        answer: 'B',
        points: 100
      }, {
        subject: 'BACON!',
        question: 'Which One?',
        answer: 'I am Bill from Space Jam.',
        points: 200
      }, {
        subject: 'BACON!',
        question: 'Mystery Box',
        answer: '????????',
        points: 300
      }, {
        subject: 'BACON!',
        question: 'Kittens!',
        answer: 'Kittens are sometimes cute',
        points: 400
      }, {
        subject: 'BACON!',
        question: 'CORGIS!',
        answer: 'Corgis are cute',
        points: 500
      }, {
        subject: 'BACON!',
        question: 'CORGIS!',
        answer: 'Corgis are cute',
        points: 600
      }, {
        subject: 'BACON!',
        question: 'CORGIS!',
        answer: 'Corgis are cute',
        points: 700
      }, {
        subject: 'BACON!',
        question: 'CORGIS!',
        answer: 'Corgis are cute',
        points: 800
      }, {
        subject: 'BACON!',
        question: 'BACON!',
        answer: 'Bacon is delish!',
        points: 900
      }],
    };

    this.handleFlipCard = this.handleFlipCard.bind(this);
    this.handleFlipCardBack = this.handleFlipCardBack.bind(this);
    this.handleShowAnswer = this.handleShowAnswer.bind(this);
  }

  handleFlipCard(selectCard) {
    let y = [];
    y.push(selectCard);

    this.setState({
      selectedCards: this.state.selectedCards.concat(selectCard),
      tempCardData: y,
      isFlipped: !this.state.isFlipped
    })
  }

  handleFlipCardBack() {
    this.setState({
      showAnswer: "",
      isFlipped: !this.state.isFlipped
    })
  }

  handleShowAnswer(axax) {
    console.log(axax)
    let x = axax.tempCardData;
    let y = x[0].answer;
    console.log(y);

    this.setState({
      showAnswer: y
    })
  }

  render() {
    return (
 
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <ReactCardFlip isFlipped={this.state.isFlipped}>
              <Front key="front"
                cards={this.state.cards}
                handleFlipCard={this.handleFlipCard} />
              <Back key="back"
                selectedCards={this.state.selectedCards}
                showAnswer={this.state.showAnswer}
                tempCardData={this.state.tempCardData}
                handleFlipCardBack={this.handleFlipCardBack}
                handleShowAnswer={this.handleShowAnswer} />
            </ReactCardFlip>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

