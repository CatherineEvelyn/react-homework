import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.handleFlipCard(this.props);
  }

  render() {
    const { subject, /*question, answer, points*/ } = this.props;

    return (
      <div className="col col-xs-12 col-md-6 col-lg-4">
        <div id="front-of-card">{subject}
        </div>
        <div className="btn btn-primary btn-lg" onClick={this.handleClick}>Flip this card</div>
        <p>.</p>
      </div>
    );
  }
}

export default Card;