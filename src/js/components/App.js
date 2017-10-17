var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var SearchForm = require('./SearchForm.js');

function getAppState(){
	return {

	}
}

var App = React.createClass({
	getInitialState: function(){
		return getAppState();
	},
	componentDidMount: function() {
		AppStore.addChangeListener(this._onChnage);	
	},
	componentWillUnmount: function() {
		AppStore.removeChangeListener(this._onChnage);	
	},
	render: function(){
		return(
			<div>
				<SearchForm />
			</div>
		)
	},
	_onChnage: function(){
		this.setState(getAppState());
	}
});

module.exports = App;