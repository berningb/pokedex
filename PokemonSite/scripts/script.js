var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'pages/mainPage.html',
            controller: 'mainController'
        })
});

app.controller('mainController', function ($scope) {
    //    $scope.name = monArr[1].name;
    //    $scope.number = monArr[1].number;
    $scope.message = 'fuck';

});