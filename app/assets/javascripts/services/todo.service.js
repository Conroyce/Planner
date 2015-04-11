app.factory("Task", ["$resource", function($resource) {
  return $resource(
    "/todos/:id", {id:"@id"}, {update: {method: "PATCH"}});
}])