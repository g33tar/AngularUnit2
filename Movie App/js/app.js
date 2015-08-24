var app = angular.module("MovieApp", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/list.html',
        controller: 'SearchController'
      })
      .when('/:id', {
        templateUrl: 'partials/show.html',
        controller: 'SearchController'
      })
});
