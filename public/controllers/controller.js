'use strict';

const app = angular.module('myApp', []);
app.controller('AppCtrl', function($scope, $http) {
  // console.log("I'm coming from the controller!!");

  let refresh = function() {
    $http.get('/contactlist').success(function(response) {
      // console.log("Got the data requested");
      $scope.contactlist = response;
      $scope.contact = '';
    });
  }

  refresh();

  $scope.addContact = function() {
    // console.log($scope.contact);
    $http.post('/contactlist', $scope.contact).success(function(response) {
      console.log(response);
      refresh();
    });
  };

  $scope.removeContact = function(id) {
    console.log(id);
    $http.delete('/contactlist/' + id).success(function(response) {
      refresh();
    });
  };

  $scope.editContact = function(id) {
    console.log(id);
    $http.get('/contactlist/' + id).success(function(response) {
      $scope.contact = response;
    });
  };

});
