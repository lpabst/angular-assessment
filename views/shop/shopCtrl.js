angular.module('assessment').controller('shopCtrl', function($scope, shopService){


    $scope.getInfo = function(){
        shopService.getInfo().then(function(response){
            $scope.data = response.data;
            console.log(response);
        })
    }

    $scope.getInfo();





});