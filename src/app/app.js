/**
 * angular-starter-kit
 *
 * @author Andrea SonnY <andreasonny83@gmail.com>
 * @copyright 2016 Andrea SonnY <andreasonny83@gmail.com>
 *
 * This code may only be used under the MIT style license.
 *
 * @license MIT  https://andreasonny.mit-license.org/@2016/
 */
(function() {
    'use strict';

    var app = angular
        .module('app', [
            'ngResource',
            'ngRoute',
            'ngAnimate',
            'ngMaterial',
            'ui.bootstrap'
        ])
        .config(config)
        .factory('getRates', ['$resource', function($resource) {
            return $resource('https://api.fixer.io/latest?base=AUD&symbols=USD', {}, {
                get: {
                    method: 'GET'
                }
            });

}]);;

// safe dependency injection
// this prevents minification issues
config.$inject = ['$routeProvider', '$locationProvider'];
// run.$inject = [];

/**
 * App routing
 *
 * You can leave it here in the config section or take it out
 * into separate file
 *
 */
function config($routeProvider, $locationProvider) {
    // routes
    $routeProvider
        .when('/', {
            templateUrl: 'app/home/home.html',
            controller: 'HomeController',
            controllerAs: 'homeCtrl'
        })
        .otherwise({
            redirectTo: '/404'
        });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
}

/**
 * Run once the App is ready
 */

})();
