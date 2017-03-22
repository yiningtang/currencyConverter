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

    angular
        .module('app')
        .controller('HomeController', HomeController);

    function HomeController($scope, getRates) {
        var vm = this;
        $scope.base;
        getRates.get({}, function(data) {
            if (typeof data != 'undefined' && typeof data.rates != "undefined") {
                $scope.rates = data.rates.USD;
                $scope.result = $scope.base * $scope.rates;
                console.log($scope.result);
            }
        })


        $scope.refresh = function(base) {
            if (typeof base == 'number') {
                getRates.get({}, function(data) {
                    if (typeof data != 'undefined' && typeof data.rates != 'undefined') {
                        $scope.rates = data.rates.USD;
                        $scope.result = $scope.base * $scope.rates;
                    }
                })
            }
        }

        //using sse to update Rates
        /*var source = new EventSource("https://api.fixer.io/latest?base=AUD&symbols=USD/sse");
        source.addEventListener('RatesUpdated',function(event) {
            if(typeof event.data!='undefined' && typeof event.data.rates!='undefined'){
              $scope.rates=event.data.rates.USD;
              $scope.result = parseInt($scope.base) * parseInt($scope.rates);
            }
        });*/

    }

    HomeController.$inject = ['$scope', 'getRates'];
})();
