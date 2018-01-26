'use strict';
var React = require('react'),
  Button = require('components/Button'),
  Image = require('components/Image'),
  App = require('logic/App'),
  _ = require('underscore');

var
  Container = React.createClass({

    getInitialState: function () {
      return {cards: this.props.cards};
    },

    onImageClick: function (i) {
      var
        tempCards = this.state.cards,
        currentCard = tempCards[ i ],
        self = this,
        firstCard,
        secondCard;

      if ( currentCard.isResolved ) {
        return;
      }

      currentCard.isVisible = true;

      App.openCards.push(currentCard);

      if ( App.openCards.length === 2 ) {
        firstCard = App.openCards[ 0 ];
        secondCard = App.openCards[ 1 ];

        if ( firstCard.image !== secondCard.image ) {
          setTimeout(function () {
            tempCards.forEach(function (card) {
              if ( !card.isResolved ) {
                card.isVisible = false;
              }
            });
            self.setState({cards: tempCards});
          }, 500);
        } else {
          _.filter(tempCards, function (card) {
            return card.id === firstCard.id || card.id === secondCard.id;
          }).forEach(function (card) {
            card.isResolved = true;
          });
        }
        App.clearOpenCards();
      }

      self.setState({cards: tempCards});
    },

    restartGame: function () {
      App.clearOpenCards();
      this.setState({cards: App.mixCards()});
    },

    render: function () {
      var imageCards = this.state.cards.map(function (card) {
        return (
          <Image card={card} key={'image-'+card.id} localHandleClick={this.onImageClick}></Image>
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
