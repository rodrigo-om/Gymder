(function () {
	angular.module('myApp')
		.controller('ObjetivoController', ['$localStorage', function ($localStorage) {
			var vm = this;
			vm.texto = 'sunda';
			vm.objetivos = [{
				id: 1,
				label: 'Perder Peso'
			}, {
				id: 2,
				label: 'Ganhar massa muscular'
			}, {
				id: 3,
				label: 'Treinamento funcional'
			}];

			vm.objetivoEscolhido = function (objetivo) {
				$localStorage.objetivo = objetivo
				vm.selectedGoal = 'true'
			};
		}]);
}())