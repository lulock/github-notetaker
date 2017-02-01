var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router; 
var routes = require('./config/routes'); 

ReactDOM.render(
    // router handles different routes in our app. Route is an instruction sheet to decide which component to render depending on which route we're at
    <Router>{routes}</Router>, 
    document.getElementById('app')
)