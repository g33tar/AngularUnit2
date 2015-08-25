
app.controller('SearchController', function($scope, $http, $routeParams, $location){
  $scope.movieSearch = function(){
    $scope.movieTitle;
    $http.get('http://www.omdbapi.com/?s=' + $scope.movieTitle)
    .then(function(response){
      $location.path('/')
      $scope.results = response.data.Search
    })
  }
  $http.get('http://www.omdbapi.com/?i=' + $routeParams.id)
    .then(function(response){
      $scope.movie = response.data

    })
   $scope.moviePoster = "http://img.omdbapi.com/?i=" + $routeParams.id + "&apikey=cb605cf9"
})
