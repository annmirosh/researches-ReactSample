var _ = require('underscore');
var App = {
  defaultImageArray: [
    'images/cat1.jpg',
    'images/cat2.jpg',
    'images/cat3.jpg'
  ],
  cards: [],
  openCards: [],
  clearOpenCards: function () {
    this.openCards = [];
  },
  mixCards: function () {
    var
      imageArray = this.defaultImageArray,
      cardCount = imageArray.length * 2,
      mixedArray = _.shuffle(_.range(cardCount)),
      cards = [];

    imageArray.concat(imageArray)
      .forEach(function (card, ind) {
        cards.push(
          {
            id: mixedArray[ ind ],
            image: card,
            isVisible: false
          }
        );
      });
    return _.sortBy(cards, 'id');
  }
};

module.exports = App;