var app = angular.module("angular2App", ['ngRoute']);


app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      .when('/dogs', {
        templateUrl: 'partials/dogs.html',
        controller: 'DogsController'
      })
      .otherwise ({
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
});
