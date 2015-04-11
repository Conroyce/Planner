app.controller("TodoCtrl", ["$scope", "Task", "$location", "$routeParams", function($scope, Task, $location, $routeParams) {

  $scope.todos = Task.query();
  $scope.data = {};

  $scope.edit_path = function(id) {
    $location.path("/todos/"+id+"/edit");
  };

  $scope.addRequest = function() {
    var task = new Task({ task: $scope.data.task, date: $scope.data.date });
    task.$save();
    $scope.data = {};
  };

  $scope.deleteRequest = function(id) {
    Task.get({id: id}, function(data) {
      data.$delete(); 
    });
  };  

  $scope.editRequest = function() {
    var D = $scope.edit;
    Task.get({id: $routeParams.id}, function(data) {
      if (D.newTask && D.newDate) {
        data.task = D.newTask;
        data.date = D.newDate;
      } else if(D.newTask) {
        data.task = D.newTask;
      } else if(D.newDate) {
        data.date = D.newDate;
      }
      
      data.$update();
    });  
  };
  
}]);