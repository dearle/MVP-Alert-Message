angular.module('App')
.directive('messageDirective', function() {
  return {
    scope: {},
    restrict: 'E',
    controller: function($http) {
      this.mod = 'normal';
    	this.handleClick = function () {
    		$http.post('http://127.0.0.1:3000/message', JSON.stringify({
            text: this.text, 
            number: this.number, 
            mod: this.mod
          }), {
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