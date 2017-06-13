angular.module('App')
.directive('historyDirective', function() {
  return {
    scope: {},
    restrict: 'E',
    controller: function($http) {
    	this.messages = [];

    	// $http.get('http://127.0.0.1:3000/history', {
     //      contentType: 'application/json'
     //    })
     //    .then(function (data) {
     //      console.log('Get Successful: ', data);
     //      this.messages = data.data;
     //    })
     //    .catch(function (data) {
     //      console.error('Get Failed', data);
     //    })    
    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: '../templates/history-view.html'
  };
});