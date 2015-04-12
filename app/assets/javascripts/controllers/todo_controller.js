app.controller("TodoCtrl", ["$scope", "Task", "$location", "$routeParams", function($scope, Task, $location, $routeParams) {

  $scope.data = {};
  Task.query(function(data) {
    $scope.todos = [];
    $scope.completed = [];

    data.forEach(function(v) {
      if (v.completed) {
        $scope.completed.push(v);
      } else {
        $scope.todos.push(v);
      }
    });

  });

  $scope.edit_path = function(id) {
    $location.path("/todos/"+id+"/edit");
  };

  $scope.complete_path = function() {
    $location.path("/complete");
  }

  $scope.todo_path = function() {
    $location.path("/todos");
  }

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

  $scope.completeTask = function(id) {
    Task.get({id:id}, function(data) {
      data.completed = true;
      data.$update();
    });
  }
  
}]);