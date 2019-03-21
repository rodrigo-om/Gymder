(function() {
	angular.module('myApp', ['ui.router','ngStorage'])
	.controller('UserCtrl', ['$scope', '$localStorage', function($scope, $localStorage) {
      $scope.isrounded = false;
      $scope.$storage = $localStorage; 

      $scope.playlists = ["setembro.jpg", "summer.png", "trip-album-ART.jpg"];

      $scope.selectedPlaylistIndex = 4; // Whatever the default selected index is, use -1 for no selection

      $scope.coverClicked = function ($index) {
         $scope.playlistSelected = $scope.selectedPlaylistIndex != $index
         $scope.selectedPlaylistIndex = $scope.selectedPlaylistIndex != $index 
         ? $scope.selectedPlaylistIndex = $index 
         : $scope.selectedPlaylistIndex = 4;
      };

      $scope.store = function(storeName) {
         $localStorage.d
      }
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
      .state('equipamento', {
        url: 'equipamento',
        url: '/equipamento',
        templateUrl: 'equipamentos.html'
     })
      .state('spotify', {
        url: 'spotify',
        url: '/spotify',
        templateUrl: 'spotify.html'
     })
      .state('resultado', {
        url: 'resultado',
        url: '/resultado',
        templateUrl: 'resultado.html'
     })
   });
})();