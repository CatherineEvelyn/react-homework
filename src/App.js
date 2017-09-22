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
        subject: 'Oil',
        question: 'True or False: Canola oil has a higher smoke point than peanut oil',
        answer: 'False',
        points: 100
      }], 
      isFlipped: false,
      cards: [{
        subject: 'Oil',
        question: 'True or False: Canola oil has a higher smoke point than peanut oil',
        answer: 'False',
        points: 100
      }, {
        subject: 'Fun History',
        question: 'On what vegetable did an ancient Egyptian place his right hand when taking an oath?',
        answer: 'Onion',
        points: 200
      }, {
        subject: 'Say Cheese!',
        question: 'What animals milk is used to make authentic Italian mozzarella cheese?',
        answer: "The water buffalo's",
        points: 300
      }, {
        subject: 'Cocktails',
        question: 'What was the drink we know as the Bloody Mary originally called?',
        answer: 'The Red Snapper',
        points: 400
      }, {
        subject: 'Nutrition',
        question: 'What is the only essential vitamin not found in the white potato?',
        answer: 'Vitamin A',
        points: 500
      }, {
        subject: 'Technique',
        question: ' Blanching is quickly submerging vegetables in boiling water. What is it called when you then throw them into ice water?',
        answer: 'Shocking',
        points: 600
      }, {
        subject: 'Ingredients',
        question: 'A roux is used to thicken soups or sauces. It is usually made of:',
        answer: 'Butter and flour',
        points: 700
      }, {
        subject: 'Family Tree',
        question: 'Black-eyed peas are not peas.  What are they',
        answer: 'Beans',
        points: 800
      }, {
        subject: 'Italian Cuisine',
        question: 'Pasta cooked al dente will be:',
        answer: 'slightly firm to the bite',
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

