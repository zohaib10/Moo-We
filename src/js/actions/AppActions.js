var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants.js');

var AppActions = {
	searchMovies: function(movie){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.SEARCH_MOVIES,
			movie: movie
		});
	},
	revieveMovieResults(movies){
		console.log(movies);
		AppDispatcher.handleViewAction({
			actionType: AppConstants.RECIEVE_MOVIE_RESULTS,
			movie: movies
		});
	}

}

module.exports = AppActions;