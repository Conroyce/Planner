app.controller("TodoCtrl", ["$scope", "Task", function($scope, Task) {

  $scope.todos = Task.query();

  $scope.data = {};
  $scope.addRequest = function() {
    var task = new Task({ task: $scope.data.task, date: $scope.data.date });
    task.$save();
    $scope.data = {};
  };

  $scope.deleteRequest = function(id) {
    Task.get({id: id}).$promise.then(function(data) {
      data.$delete();
    });

    
  }
}]);