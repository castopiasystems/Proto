App.controller('FormDemoCtrl', function($scope, $resource) {
  'use strict';

  // the following allow to request array $resource instead of object (default)
  var actions = {'get': {method: 'GET', isArray: true}};
  
  // Tags inputs
  // ----------------------------------- 
  var Cities = $resource('server/cities.json', {}, actions);

  Cities.get(function(data){

      $scope.cities = data;

  });
  // for non ajax form just fill the scope variable
  // $scope.cities = ['Amsterdam','Washington','Sydney','Beijing','Cairo'];

  // Slider demo values
  $scope.slider1 = 5;
  $scope.slider2 = 10;
  $scope.slider3 = 15;
  $scope.slider4 = 20;
  $scope.slider5 = 25;
  $scope.slider6 = 30;
  $scope.slider7 = 10;
  $scope.slider8 = [250,750];

  // Chosen data
  // ----------------------------------- 

  var States = $resource('server/chosen-states.json', {},  {'query':    {method:'GET', isArray:true} });

  $scope.states = States.query();


  $scope.alertSubmit = function(){
    alert('Form submitted!');
    return false;
  };

});