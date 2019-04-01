(function () {
    angular.module('myApp')
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
        .state({
            name: 'home',
            url: '/',
            templateUrl: 'src/pages/home/home.html'
        })
        .state('local', {
            url: 'local',
            url: '/local',
            templateUrl: 'src/pages/local/local.html'
        })
        .state('objetivo', {
            url: 'objetivo',
            url: '/objetivo',
            templateUrl: 'src/pages/objetivo/objetivos.html'
        })
        .state('academia', {
            url: 'academia',
            url: '/academia',
            templateUrl: 'src/pages/academia/academia.html'
        })
        .state('equipamento', {
            url: 'equipamento',
            url: '/equipamento',
            templateUrl: 'src/pages/equipamentos/equipamentos.html'
        })
        .state('spotify', {
            url: 'spotify',
            url: '/spotify',
            templateUrl: 'src/pages/spotify/spotify.html'
        })
        .state('resultado', {
            url: 'resultado',
            url: '/resultado',
            templateUrl: 'src/pages/resultado/resultado.html'
        })
    }]);
}())