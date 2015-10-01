'use strict';
var React = require('react');

var Image = React.createClass({
  render: function () {
    return (
      <img src={this.props.card.isVisible ? this.props.card.image : ''}
           onClick={this.props.localHandleClick.bind(null, this.props.card.id)}
           className="imageCard">
      </img>
    );
  }
});

module.exports = Image;
