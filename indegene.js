var app = angular.module("angularModule",[]);
app.controller("angularController",function($scope,$http){
    $scope.name="smitha";
    $http.get("indegene.json").then(function(response){
              $scope.josndata = response.data;
              });
});
    

