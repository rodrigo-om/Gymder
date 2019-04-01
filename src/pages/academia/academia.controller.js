(function () {
	angular.module('myApp')
		.controller('AcademiaController', ['$localStorage', function ($localStorage) {
			var vm = this;
			vm.locais = [{
				id: 1,
				label: 'Zona Sul'
			}, {
				id: 2,
				label: 'Zona Norte'
			}];

			vm.localEscolhido = function(zona) {
				$localStorage.zonaAcademia=zona
				vm.selectedGym=true
			}

			vm.jaTenhoAcademia = function(event) {
				vm.selectedGym=event.target.checked 
				$localStorage.zonaAcademia=false
			}
		}]);
}())