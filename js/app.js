angular.module('assessment', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: '../views/home/home.html'
    })
    .state('about', {
        url: '/about',
        templateUrl: '../views/about/about.html'
    })
    .state('blog', {
        url: '/blog',
        templateUrl: '../views/blog/blog.html'
    })
    .state('shop', {
        url: '/shop',
        templateUrl: '../views/shop/shop.html',
        controller: 'shopCtrl'
    })
    .state('details', {
        url: '/details/:id',
        templateUrl: '../views/product-details/product-details.html',
        controller: 'productDetailsCtrl'
    })


    $urlRouterProvider.otherwise('/');






})