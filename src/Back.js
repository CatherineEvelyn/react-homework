import React, { Component } from 'react';
import "./index.css";

class Back extends Component {
  constructor(props) {
    super(props);

    this.handleClickBack = this.handleClickBack.bind(this);
    this.handleClickShowAnswer = this.handleClickShowAnswer.bind(this);
  }

  handleClickBack(event) {
    this.props.handleFlipCardBack(this.props);
  }

  handleClickShowAnswer(event) {
    this.props.handleShowAnswer(this.props);
  }

  totalScore(selectedCards) {
    let score = 0;
    for (let i=0; i < selectedCards.length; i++) {
      let objCard = selectedCards[i];
      score = score + objCard.points
    }
    return score
  }

  render() {
    const { selectedCards, tempCardData, showAnswer } = this.props;
    let onCard = tempCardData[0];

    return (
      <div className="card" id="back-of-card">
        <div>
          <div id="question">{onCard.question}</div>
          <div id="points">Points: {onCard.points}</div>
          <div>Answer: {showAnswer}</div>          
          <div><br /><br /><br /><strong>Total Score:</strong> {this.totalScore(selectedCards)}</div>
          <div className="btn btn-primary btn-lg" onClick={this.handleClickBack}>Flip Back</div>. 
          <div className="btn btn-primary btn-lg" onClick={this.handleClickShowAnswer}>ShowAnswer</div>
        </div>
      </div>
    );
  }
}

export default Back;