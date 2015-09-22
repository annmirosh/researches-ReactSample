var React = require('react');

var Button = React.createClass({
  render: function () {
    return (
      <button onClick={this.props.localButtonClick}>Restart game</button>
    );
  }
});

module.exports = Button;