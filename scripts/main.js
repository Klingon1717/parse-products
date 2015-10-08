'use strict';
var React = require('react');
var Backbone = require('backbone');
window.$ = require('jquery');
window.jQuery = $;

var NavigationComponent = require('./components/NavigationComponent');
var HomeComponent = require('./components/HomeComponent');
var AddProductComponent = require('./components/AddProductComponent');
var LoginComponent = require('./components/LoginComponent');
var BooksComponent = require('./components/BooksComponent');
var AddBookForm = require('./components/AddBookForm');
var BookListComponent = require('./components/BookListComponent');
var BookDetailsComponent = require('./components/BookDetailsComponent');
var ElectronicsComponent = require('./components/ElectronicsComponent');
var ClothingComponent = require('./components/ClothingComponent');
var RegisterComponent = require('./components/RegisterComponent');

Parse.initialize("zkpvLjWqCoKUUjxsYuASZLCHb0UqvYoQ2Z4lIsh2", "7Ez4PB8ZfZKUeCs8QY1pTD5T8cs4QT4nXpG4nF9B");



var app = document.getElementById('app');

var Router = Backbone.Router.extend({
	routes: {
		'': 'home',
		'add': 'add',
		'category/:category': 'category',
		'login': 'login',
		'register': 'register'
	},
	home: function() {
		React.render(<HomeComponent />, app);
	},
	add: function() {
		React.render(<AddProductComponent />, app);
	},
	category: function(category) {
		React.render(<CategoryComponent category={category} />, app);
	
	},
	login: function() {
		React.render(<LoginComponent router={r} />, app);
	},
	register: function() {
		React.render(<RegisterComponent router={r} />, app);
	}
});

var r = new Router();
Backbone.history.start();

React.render(
	<NavigationComponent router={r} />,
	document.getElementById('nav')
);