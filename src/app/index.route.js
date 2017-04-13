export function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    'ngInject';
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/views/home/home.html',
            controller: 'HomeController',
            controllerAs: 'home',
            showheader: false,
            startgallery: false
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'app/views/contact/contact.html',
            controller: 'ContactController',
            controllerAs: 'contact',
            startgallery: false
        })
        .state('about', {
            url: '/about',
            templateUrl: 'app/views/about/about.html',
            controller: 'AboutController',
            controllerAs: 'about',
            startgallery: false
        })
        .state('skills', {
            url: '/skills',
            templateUrl: 'app/views/skills/skills.html',
            controller: 'SkillsController',
            controllerAs: 'skills',
            startgallery: true
        })
        .state('projects', {
            url: '/projects',
            templateUrl: 'app/views/projects/projects.html',
            controller: 'ProjectsController',
            controllerAs: 'projects',
            startgallery: false
        });

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
}
