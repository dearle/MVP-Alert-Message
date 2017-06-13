angular.module('App')
.factory('FetchService', function FetchService($http) {
  function getMessages() {
    return $http.get('http://127.0.0.1:3000/history', {contentType: 'application/json'})
    .then(function (response) {
      console.log('Get Successful: ', response);	
      return response.data;
    })
    .catch(function (response) {
      console.error('Get Failed', response);
    });
  }
  return {
    getMessages: getMessages
  };
});