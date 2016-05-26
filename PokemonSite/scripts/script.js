var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })
        .when('/one', {
            templateUrl: 'pages/one.html',
            controller: 'mainController'
        })
        .when('/two', {
            templateUrl: 'pages/two.html',
            controller: 'mainController'
        })
        .when('/three', {
            templateUrl: 'pages/three.html',
            controller: 'mainController'
        })
        .when('/four', {
            templateUrl: 'pages/four.html',
            controller: 'mainController'
        })

    .when('/five', {
        templateUrl: 'pages/five.html',
        controller: 'mainController'
    })

    .when('/six', {
        templateUrl: 'pages/six.html',
        controller: 'mainController'
    })

    .when('/seven', {
        templateUrl: 'pages/seven.html',
        controller: 'mainController'
    })

    .when('/eight', {
        templateUrl: 'pages/eight.html',
        controller: 'mainController'
    })

    .when('/nine', {
        templateUrl: 'pages/nine.html',
        controller: 'mainController'
    })
});

app.controller('mainController', function ($scope) {
    $scope.message = "Test Text";
});

function giveTypes() {
    console.log("I made it");
    var types = document.getElementsByClassName("type");
    for (i = 0; i < types.length; i++) {
        switch (types[i]) {
        case "Grass":
            types[i].className += " Grass";
            break;
        case "Poison":
            types[i].className += " Poison";
            break;
        case "Steel":
            types[i].className += " Steel";
            break;
        case "Rock":
            types[i].className += " Rock";
            break;
        case "Ground":
            types[i].className += " Ground";
            break;
        case "Electric":
            types[i].className += " Electric";
            break;
        case "Fire":
            types[i].className += " Fire";
            break;
        case "Water":
            types[i].className += " Water";
            break;
        case "Flying":
            types[i].className += " Flying";
            break;
        case "Dark":
            types[i].className += " Dark";
            break;
        case "Fairy":
            types[i].className += " Fairy";
            break;
        case "Dragon":
            types[i].className += " Dragon" ;
            break;
        case "Bug":
            types[i].className += " Bug";
            break;
        case "Ghost":
            types[i].className += " Ghost";
            break;
        case "Fighting":
            types[i].className += " Fighting";
            break;
        case "Ice":
            types[i].className += " Ice";
            break;
        case "Psychic":
            types[i].className += " Psychic";
            break;
        case "Normal":
            types[i].className += " Normal";
            break;
        default:
            break;
        }
    }
}