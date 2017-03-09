export function routerConfig ($stateProvider, $urlRouterProvider, $locationProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/views/home/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    });

  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
}
