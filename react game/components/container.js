var React = require('react');

var Button = require('./Button');
var Image = require('./Image');
var App = require('./../logic/App');

var _ = require('underscore');

var Container = React.createClass({

  getInitialState: function () {
    return {cards: this.props.cards};
  },
  onImageClick: function (i) {

    var tempCards = this.state.cards, currentCard = tempCards[ i ];
    if ( currentCard.isResolved ) {
      return;
    }
    currentCard.isVisible = true;
    App.openCards.push(currentCard);
    if ( App.openCards.length === 2 ) {
      var firstCard = App.openCards[ 0 ], secondCard = App.openCards[ 1 ];
      if ( firstCard.image != secondCard.image ) {
        tempCards.forEach(function (card) {
          card.isVisible = false;
        });
      } else {
        _.filter(tempCards, function (card) {
          return card.id === firstCard.id || card.id === secondCard.id;
        }).forEach(function (card) {
          card.isResolved = true;
        });
      }
      App.openCards = [];
    }
    this.setState({cards: tempCards});
  },

  restartGame: function () {
    this.setState({cards: App.mixCards(App.defaultImageArray)});
  },

  render: function () {
    var imageCards = this.state.cards.map(function (card) {
      return (
        <Image card={card} localHandleClick={this.onImageClick}></Image>
      );
    }, this);
    return (
      <div className="container">
        {imageCards}
        <Button localButtonClick={this.restartGame}/>
      </div>
    );
  }
});

module.exports = Container;