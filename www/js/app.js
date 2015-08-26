// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var db = null;
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova'])

    .run(function($ionicPlatform, $cordovaSQLite) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
            db = window.sqlitePlugin.openDatabase({ name: "fuelmanager.db" });
            $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS abastecimentos (id integer primary key, data datetime, kmveiculo integer, combustivel varchar, valorcombustivel integer, valorabastecido integer)");

        }
        else {
            db = window.openDatabase("fuelmanager.db", '1', 'my', 1024 * 1024 * 100);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleLightContent();
        }
    });
})

    .config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
        .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
    })

    // Each tab has its own nav history stack:

        .state('tab.lista', {
        url: '/lista',
        views: {
            'tab-lista': {
                templateUrl: 'templates/tab-lista.html',
                controller: 'ListaCtrl'
            }
        }
    })

        .state('tab.abastecimento', {
        url: '/abastecimento',
        views: {
            'tab-abastecimento': {
                templateUrl: 'templates/tab-abastecimento.html',
                controller: 'AbastecimentoCtrl'
            }
        }
    })
        .state('tab.chat-detail', {
        url: '/chats/:chatId',
        views: {
            'tab-chats': {
                templateUrl: 'templates/chat-detail.html',
                controller: 'ChatDetailCtrl'
            }
        }
    })

        .state('tab.sobre', {
        url: '/sobre',
        views: {
            'tab-sobre': {
                templateUrl: 'templates/tab-sobre.html',
                controller: 'SobreCtrl'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/lista');

});