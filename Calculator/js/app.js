var app = angular.module("calculatorApp", ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/add/:x/:y', {
      templateUrl: 'partials/math.html',
      controller: 'AddController'
    })
  .when('/divide/:a/:b', {
    templateUrl: 'partials/math.html',
    controller: 'DivController'
  })
})
