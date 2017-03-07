var app = angular.module("app", ["ui.router"]);
app.config(function($stateProvider,$locationProvider,$urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');
    $stateProvider
    .state('home',
    {
        url:'/home',
        title:'Login',
        templateUrl: 'pages/simple.html'
    })
    .state('new',
    {
        url:'/newfile',
        title:'loggedin',
        templateUrl:'pages/new.html'

    });

});
        
