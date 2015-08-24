app.controller('HttpController', function($scope, $http){
  $http.get('https://api.github.com/zen').then(function(data){
    $scope.zenData = data.data;
});
});
