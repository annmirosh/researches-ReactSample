var React = require('react');
var Container = require('./components/Container');
var App = require('./logic/App');

App.cards = App.mixCards(App.defaultImageArray);

React.render(
  <Container cards={App.cards}/>,
  document.getElementById('content')
);