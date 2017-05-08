angular.module('assessment').service('shopService', function($http){


    this.getInfo = function(){
        return $http.get('https://practiceapi.devmountain.com/products/')
    }










});