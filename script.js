var app = angular.module('thing', ['ngRoute']);



// configure our routes
app.config(function ($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'mainController'
    })


});

// create the controller and inject Angular's $scope

app.controller('mainController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'works!';

});