'use strict';

const app = angular.module('myApp', []);
app.controller('AppCtrl', function($scope, $http) {
  console.log("I'm coming from the controller!!");

  $http.get('/contactlist')
  
    const person1 = {
      name: 'Tim',
      email: 'tim@email1.com',
      number: '(111) 111-1111'
    };

    const person2 = {
      name: 'Emily',
      email: 'emily@email2.com',
      number: '(222) 222-2222'
    };

    const person3 = {
      name: 'John',
      email: 'john@email3.com',
      number: '(333) 333-3333'
    };

    const contactlist = [person1, person2, person3];

    $scope.contactlist = contactlist;
})
