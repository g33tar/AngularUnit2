app.controller('AddController', function($scope, $routeParams){
  $scope.varX = $routeParams.x;
  $scope.varY = $routeParams.y;
  $scope.sum = Number($routeParams.x) + Number($routeParams.y )
})

app.controller('DivController', function($scope, $routeParams){
  $scope.varA = $routeParams.a;
  $scope.varB = $routeParams.b;
  $scope.divide = Number($routeParams.a) / Number($routeParams.b )
})
