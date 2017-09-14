import React, { Component } from 'react';

class Product extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.handleFlipCard(this.props);
  }

  render() {
    const { imageUrl, name, description, price } = this.props;

    return (
      <div className="col col-xs-12 col-md-6 col-lg-4">
        <div>
          <img src={imageUrl} alt={name} class="img-rounded" alt="Cinque Terre" width="350" height="100"/>
        </div>
        <div className="btn btn-primary btn-lg" onClick={this.handleClick}>Flip this card</div>
        <p>.</p>
      </div>
    );
  }
}

export default Product;