var React = require('react');
var ProductModel = require('./ProductModel');


module.exports = React.createClass({
	componentWillMount: function(){
		var query = new Parse.Query(ProductModel);
		query.equalTo('category', this.props.category.toLowerCase());
		query.find().then((products) => {
			this.setState({products: products});
		});
	}
	render: function(){
		var displayCategory = this.props.category.charAt(0).displayCategory();
		displayCategory += this.props.category.substr(1);
		return{
			products: [],
		}
		return(
			products
			<div className ="container">
				<div className="row">
					<h1>{this.state.displayCategory}</h1>
			)
	}