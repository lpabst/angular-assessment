angular.module('assessment')
.directive('productDir', function(){


    return {
        restrict: 'E',
        templateUrl: './views/directives/product/product-tmpl.html',
        scope: {
            item: '=',
        },
        link: function(scope, elem, atts){

        },
        controller: function($scope){
            $scope.showImage = true;

           
        }
    };



});