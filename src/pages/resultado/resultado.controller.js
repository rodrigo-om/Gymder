(function () {
    angular.module('myApp')
    .controller('ResultadoController', ['$localStorage', function ($localStorage) {
		var vm = this;
		vm.local = $localStorage.local
		vm.equipamentos = $localStorage.equipamentos
		vm.$onInit = $onInit

		function $onInit() {
			vm.exercicios = vm.filtrarExercicios()
			//vm.equipamentos = vm.filtrarEquipamentos()
			//vm.academias = vm.filtrarAcademias()
		}

		vm.filtrarExercicios = function() {
			vm.listaExercicios = vm.listaExercicios.filter(function (value) {
				return value.locais.includes($localStorage.local) && value.objetivos.includes($localStorage.objetivo.id)
			})
		};

		vm.listaExercicios = [{
			"id": 1,
			"name": "esteira",
			"locais": [
				"academia"
			],
			"objetivos": [
				1
			]
		}, {
			"id": 2,
			"name": "supino",
			"locais": [
				"academia"
			],
			"objetivos": [
				2
			]
		}, {
			"id": 3,
			"name": "bola",
			"locais": [
				"academia",
				"casa"
			],
			"objetivos": [
				3
			]
		}]

		vm.exerciciosPorLocal = {
			"casa": {
				"exercicios": [1, 2, 3]
			},
			"false": {
				"exercicios": [2]
			}
		}

		vm.listaEquipamentos = [{
			"id": 1,
			"name": "bla",
			
		}, {
			"id": 2,
			"name": "blabla"
		}, {
			"id": 3,
			"name": "blablabla"
		}]
    }]);
}())