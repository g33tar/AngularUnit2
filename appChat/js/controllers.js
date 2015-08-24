
app.controller('appController', function($scope, $http){

  $http.get('https://shielded-peak-6345.herokuapp.com/messages').
    then(function(object){
      $scope.messages = object.data
    })
  $scope.post = function(){
    $http.post('https://shielded-peak-6345.herokuapp.com/messages', {
      message: {
        name: $scope.name,
        content: $scope.content
      }
    })
    .then(function(dataset){
      var gPost = {};
      gPost.name = $scope.name;
      gPost.content = $scope.content;
      $scope.messages.push(gPost);
      $scope.name = ""; 
      $scope.content = "";
    })
  }
})
