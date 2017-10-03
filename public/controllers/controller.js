'use strict';

const app = angular.module('myApp', []);
app.controller('AppCtrl', function($scope, $http) {
  console.log("I'm coming from the controller!!");

  $http.get('/contactlist').success(function(response) {
    console.log("Got the data requested");
    $scope.contactlist = response;
  });

  $scope.addContact = function() {
    console.log($scope.contact);
  };

})
