angular.module('assessment').service('shopService', function($http){


    this.getInfo = function(){
        return $http.get('https://practiceapi.devmountain.com/products/')
    }

    this.getDetails = function(id){
        console.log(id);
        return $http.get('https://practiceapi.devmountain.com/products/'+id)
    }








});