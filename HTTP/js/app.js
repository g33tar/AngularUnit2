var app = angular.module("httpApp", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HttpController'
      })
      .otherwise ({
        templateUrl: 'partials/home.html',
        controller: 'HttpController'
      })
});
