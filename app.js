(function() {
	angular.module('myApp', ['ui.router','ngStorage'])
	.controller('UserCtrl', ['$scope', '$localStorage', function($scope, $localStorage) {
		$scope.isrounded = false;
		$scope.$storage = $localStorage; 
		$scope.playlists = ["setembro.jpg", "summer.png", "trip-album-ART.jpg"];
		$scope.selectedPlaylistIndex = -1; // Whatever the default selected index is, use -1 for no selection
		$scope.locais = [{
			id: 1,
			label: 'Zona Sul'
		}, {
			id: 2,
			label: 'Zona Norte'
		}];
		$scope.objetivos = [{
			id: 1,
			label: 'Perder Peso'
		}, {
			id: 2,
			label: 'Ganhar massa muscular'
		}, {
			id: 3,
			label: 'Treinamento funcional'
		}];

		$scope.exercicios = [ 
		{"id":1, "name":"esteira"},
		{"id":2, "name":"supino"},
		{"id":3, "name":"bola"}
		]

		$scope.exerciciosDoLocal = {
			"casa": {"exercicios":[1,2,3]},
			"false": {"exercicios":[2]}
		}

		$scope.coverClicked = function ($index) {
			$scope.playlistSelected = $scope.selectedPlaylistIndex != $index
			$scope.selectedPlaylistIndex = $scope.selectedPlaylistIndex != $index 
			? $scope.selectedPlaylistIndex = $index 
			: $scope.selectedPlaylistIndex = 4;
		};

		$scope.objetivoEscolhido = function (objetivo) {
			$scope.$storage.objetivo=objetivo
			$scope.selectedGoal='true'
		};

		$scope.filtrarExercicios = function () {
			return $scope.exercicios.filter(isEven)
		};

		function isEven(value) {
			return $scope.exerciciosDoLocal[$localStorage.local].exercicios.includes(value.id)
			
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