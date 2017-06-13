angular.module('App')
.directive('messageDirective', function() {
  return {
    scope: {},
    restrict: 'E',
    controller: function($http) {
    	this.handleClick = function () {
    		var data = this.input;
    		$http.post('http://127.0.0.1:3000/message', JSON.stringify({data: data}), {
      			contentType: 'application/json'
      		})
      		.then(function (data) {
        		console.log('Post Successful: ', data);
      		})
      		.catch(function (data) {
        		console.error('Post Failed', data);
      		}) 
    	};
    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: '../templates/message-view.html'
  };
});