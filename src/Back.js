import React, { Component } from 'react';
import "./index.css";

class Back extends Component {
  constructor(props) {
    super(props);

    this.handleClickBack = this.handleClickBack.bind(this);
  }

  handleClickBack(event) {
    this.props.handleFlipCardBack(this.props);
  }

  totalScore(selectedCard) {
    let score = 0;
    for (let i=0; i < selectedCard.length; i++) {
      let objCard = selectedCard[i];
      score = score + objCard.points
    }
    return score
  }

  render() {
    const { selectedCard, tempCardData } = this.props;
    let onCard = tempCardData[0];

    return (
      <div className="card" id="back-of-card">
        <div>
          <div id="question">{onCard.question}</div>
          <div id="points">Points: {onCard.points}</div>
          <div><br /><br /><br /><strong>Total Score:</strong> {this.totalScore(selectedCard)}</div>
          <div className="btn btn-primary btn-lg" onClick={this.handleClickBack}>Flip this card</div>
        </div>
      </div>
    );
  }
}

export default Back;