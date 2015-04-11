app.controller("TodoCtrl", ["$scope", "Task", function($scope, Task) {

  $scope.blah = Task.query();

  $scope.data = {};
  $scope.addRequest = function() {
    var task = new Task({ task: $scope.data.task, date: $scope.data.date });
    task.$save();
    // $http.post("/todos", { task: $scope.data.task, date: $scope.data.date }).success(function(data) { console.log(data) });
  };

  // $scope.deleteRequest = function() {
  //   task.get({id:}).$delete();
  // }
}]);