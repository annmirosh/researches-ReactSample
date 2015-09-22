var React = require('react');
var Container = require('./components/Container');
var App = require('./logic/App');

App.cards = App.mixCards();

React.render(
  <Container cards={App.cards}/>,
  document.getElementById('content')
);