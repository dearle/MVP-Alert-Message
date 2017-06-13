angular.module('App', ['ui.router'])
.config(function($stateProvider) {
  $stateProvider
    .state({
      name: 'message',
      url: '/message',
      template: '<message-directive></message-directive>'
    })
    .state({
      name: 'history',
      url: '/history',
      template: '<history-directive></history-directive>'
      resolve: {
        getMessage: function ($http) {
          $http.get('http://127.0.0.1:3000/history', {
            contentType: 'application/json'
          })
          .then(function (data) {
            console.log('Get Successful: ', data);
            this.messages = data.data;
          })
          .catch(function (data) {
            console.error('Get Failed', data);
          }) 
        }
      }
    })
})
