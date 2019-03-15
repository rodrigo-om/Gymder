(function() {
	angular.module('myApp', ['ui.router'])
	.controller('UserCtrl', ['$scope', function($scope) {

	}])
	.config(($stateProvider, $urlRouterProvider) => {
         $urlRouterProvider.otherwise('/');
         $stateProvider
         .state({
            name: 'home',
            url: '/',
            templateUrl: 'home.html'
            //template: '<h3>dedede uma figura</h3>'
          })
          .state('test', {
              url: 'test',
              url: '/test',
              templateUrl: 'test.html'
          })
          .state('local', {
              url: 'local',
              url: '/local',
              templateUrl: 'local.html'
          })
          .state('objetivo', {
              url: 'objetivo',
              url: '/objetivo',
              templateUrl: 'objetivos.html'
          })
          .state('academia', {
              url: 'academia',
              url: '/academia',
              templateUrl: 'academia.html'
          })
     });
})();