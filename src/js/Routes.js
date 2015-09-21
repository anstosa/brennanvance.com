angular.module('brennanvance').config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : '/dist/partials/home.html'
        })
        .when('/contact', {
            templateUrl : '/dist/partials/contact.html'
        })
    ;
});
