var DEPENDENCIES = ['$routeProvider'];

function Routes($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : '/dist/partials/home.html'
        })
        .when('/contact', {
            templateUrl : '/dist/partials/contact.html'
        })
    ;
}

Routes.$inject = DEPENDENCIES;
angular.module('brennanvance').config(Routes);
