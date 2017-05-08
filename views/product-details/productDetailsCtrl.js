angular.module('assessment').controller('productDetailsCtrl', function($scope, $stateParams, shopService){

var id = $stateParams.id;

 $scope.getDetails = function(id){
     shopService.getDetails(id).then(function(response){
         $scope.productInfo = response.data;
         console.log(response);
     })
 }
 
$scope.getDetails(id);





 





});