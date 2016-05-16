     var app = angular.module('thing', ['ngRoute', 'ngAnimate']);



     // configure our routes
     app.config(function ($routeProvider) {
         $routeProvider

         // route for the home page
             .when('/', {
             templateUrl: 'pages/home.html',
             controller: 'startController'
         })


         .when('/step1', {
                 templateUrl: 'pages/home.html',
                 controller: 'step1Controller'
             })
             .when('/step2', {
                 templateUrl: 'pages/home.html',
                 controller: 'step2Controller'
             })
             .when('/step3', {
                 templateUrl: 'pages/home.html',
                 controller: 'step3Controller'
             })
             .when('/step4', {
                 templateUrl: 'pages/home.html',
                 controller: 'step4Controller'
             })
             .when('/step5', {
                 templateUrl: 'pages/home.html',
                 controller: 'step5Controller'
             })
             .when('/step6', {
                 templateUrl: 'pages/home.html',
                 controller: 'step6Controller'
             })
             .when('/step7', {
                 templateUrl: 'pages/home.html',
                 controller: 'step7Controller'
             })
             .when('/step8', {
                 templateUrl: 'pages/home.html',
                 controller: 'step8Controller'
             })
             .when('/step9', {
                 templateUrl: 'pages/home.html',
                 controller: 'step9Controller'
             })
             .when('/step10', {
                 templateUrl: 'pages/home.html',
                 controller: 'step10Controller'
             })

     });

     // create the controller and inject Angular's $scope

     app.controller('mainController', function () {
         // create a message to display in our view
         this.message = 'Lets wash a dog!';
         this.steps = steps;
         this.currentStep = 1;
     });


     app.controller('startController', function ($scope) {
         // create a message to di splay in our view
         $scope.steps = steps[0];
     });
     app.controller('step1Controller', function ($scope) {
         // create a message to di splay in our view
         $scope.steps = steps[0];
     });

     app.controller('step2Controller', function ($scope) {
         // create a message to di splay in our view
         $scope.steps = steps[1];
     });

     app.controller('step3Controller', function ($scope) {
         // create a message to di splay in our view
         $scope.steps = steps[2];
     });

     app.controller('step4Controller', function ($scope) {
         // create a message to di splay in our view
         $scope.steps = steps[3];
     });

     app.controller('step5Controller', function ($scope) {
         // create a message to di splay in our view
         $scope.steps = steps[4];
     });

     app.controller('step6Controller', function ($scope) {
         // create a message to di splay in our view
         $scope.steps = steps[5];
     });

     app.controller('step7Controller', function ($scope) {
         // create a message to di splay in our view
         $scope.steps = steps[6];
     });

     app.controller('step8Controller', function ($scope) {
         // create a message to di splay in our view
         $scope.steps = steps[7];
     });

     app.controller('step9Controller', function ($scope) {
         // create a message to di splay in our view
         $scope.steps = steps[8];
     });

     app.controller('step10Controller', function ($scope) {
         // create a message to di splay in our view
         $scope.steps = steps[9];
     });

     var steps = [{
             number: '1',
             subname: 'Get the dog',
             description: "A dog is part of the family! When getting the dog, it is important to make sure the dog is not scared. Giving a scared dog a bath can cause a shock factor most mistake for obedience. So make sure the dog is given lots of love, and talked to in a nice soothing manner.",
             link: '/',
             btnB: true,
             btnN: false,
             image: "images/smiledog.png",
             imageL: "images/none.png",
             imageR: "images/next.png",
    },
         {
             number: '2',
             subname: 'Bring dog to water',
             description: "Bringing a dog to some sort of water source can be a challenge! We all know the struggle of trying to force a dog to do something it doesn't feel like. So try giving the dog s treat. Guide him to the water and than trap him in, giving him the treat at the end of course!",
             link: 'step2',
             btnB: false,
             btnN: false,
             image: "images/treat.png",
             imageL: "images/back.png",
             imageR: "images/next.png",
    },
         {
             number: '3',
             subname: 'Get the dog wet',
             description: "When getting the dog wet, make sure the water is always warm. DO NOT use the water if it is hot! Although dogs have a lot of fur they can still feel the warmth of the water. The fur actually keeps water under it, so the more fur the longer it stays. ",
             link: 'step3',
             btnB: false,
             btnN: false,
             image: "images/bathdog.png",
             imageL: "images/back.png",
             imageR: "images/next.png",
    },
         {
             number: '4',
             subname: 'Go get dog again!',
             description: "Usually if the dog isn't tied up or closed off in some way, he will run. Especially when the water hits his body. Make sure to block him off or tie him up or else you'll have yourself a wild goose chase all over the house or yard!",
             link: 'step4',
             btnB: false,
             btnN: false,
             image: "images/dirtydog.png",
             imageL: "images/back.png",
             imageR: "images/next.png",
    },
         {
             number: '5',
             subname: 'Rerinse dog',
             description: "Depending on how much fur the dog has it is important to make sure the dog is wet. If you just get it wet once and then go straight into shampoo it can irritate and dry the dog's skin. So make sure to soak the dog's fur.",
             link: 'step5',
             btnB: false,
             btnN: false,
             image: "images/dogwithvest.png",
             imageL: "images/back.png",
             imageR: "images/next.png",
    },
         {
             number: '6',
             subname: 'Put shampoo on dog',
             description: "Shampoo that sucker! Dogs actually really enjoy being rubbed, and what better time to rub him then while giving him a bath? Make sure to get deep inside the fur and go a couple laps around his body. It's important to get all of it!",
             link: 'step6',
             btnB: false,
             btnN: false,
             image: "images/wet.png",
             imageL: "images/back.png",
             imageR: "images/next.png",
    },
         {
             number: '7',
             subname: 'Careful of shaking',
             description: "Dogs hate texture on their bodies...well except for dirt! So make sure to stay clear after applying shampoo because the dog will more than likely shake. Someitmes to avoid this you can keep a towel handy and use it as a shield",
             link: 'step7',
             btnB: false,
             btnN: false,
             image: "images/shake.png",
             imageL: "images/back.png",
             imageR: "images/next.png",
    },
         {
             number: '8',
             subname: 'Wait patiently',
             description: "Give the dog's fur time to soak up the soap. Much like yourself, you need to let the soap sit in order to gain anything from it. He isnt going anywhere and whats an extra 5-10 minutes compared to a dirty dog? Exactly nothing!",
             link: 'step8',
             btnB: false,
             btnN: false,
             image: "images/wait.png",
             imageL: "images/back.png",
             imageR: "images/next.png",
    },
         {
             number: '9',
             subname: 'Rinse dog',
             description: "This is the most important step of all. Rinse the dog thoroughly, starting from the top to the bottom. Dogs fur is thick and soaks up a lot of the soap. So make sure to get it all. If you don't, it can cause the dog to itch really bad.",
             link: 'step9',
             btnB: false,
             btnN: false,
             image: "images/rinse.png",
             imageL: "images/back.png",
             imageR: "images/next.png",
    },
         {
             number: '10',
             subname: 'Dry dog',
             description: "This is the best part! Grab a towel and dry that dog off! The dog will love the feeling of being done with it's bath. Combine that with the fact you're rubbing his body, and he's going to go insane! You can also use a blow dryer for better results. ",
             link: 'step10',
             btnB: false,
             btnN: true,
             image: "images/dry.png",
             imageL: "images/back.png",
             imageR: "images/none.png",
    }
                ];