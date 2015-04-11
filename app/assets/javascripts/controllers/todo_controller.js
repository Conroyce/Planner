app.controller("TodoCtrl", ["$scope", "$resource", "$http", function($scope, $resource, $http) {

  var Task = $resource('/todos/:id', {id: '@id'});
  $scope.blah = Task.query();
  $http.get("/todos").success(
    function(data) {
      console.log(data); 
    });
}])