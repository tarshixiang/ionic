/**
 * Created by Administrator on 2016/7/29 0029.
 */
var app = angular.module("myApp", ['ionic','myApp.controller']);

app.config(function($stateProvider,$urlRouterProvider) {


    $stateProvider

        // setup an abstract state for the tabs directive
    .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
    })

    // Each tab has its own nav history stack:

    .state('tab.home', {
        url: '/home',
        views: {
            'tab-home': {
                templateUrl: 'templates/tab-home.html',
                controller: 'HomeCtrl'
            }
        }
    })

    .state('tab.home_article', {
        url: '/home_article',
        views: {
            'tab-home': {
                templateUrl: 'templates/tab-home-article.html',
                controller: 'HomeArticleCtrl'
            }
        }
    })


        .state('tab.shop', {
        url: '/shop',
        views: {
            'tab-shop': {
                templateUrl: 'templates/tab-shop.html',
                controller: 'ShopCtrl'
            }
        }
    })



    .state('tab.product', {
        url: '/product',
        views: {
            'tab-product': {
                templateUrl: 'templates/tab-product.html',
                controller: 'ProductCtrl'
            }
        }
    })
    .state('tab.account', {
        url: '/account',
        views: {
            'tab-account': {
                templateUrl: 'templates/tab-account.html',
                controller: 'AccountCtrl'
            }
        }
    })


    $urlRouterProvider.otherwise('/tab/home');


});


