(function () {
    angular.module('myApp')
    .controller('ResultadoController', ['$localStorage', function ($localStorage) {
		var vm = this;
		vm.local = $localStorage.local
		vm.equipamentos = $localStorage.equipamentos
		vm.zonaAcademia = $localStorage.zonaAcademia
		vm.objetivo = $localStorage.objetivo
		vm.playlist = $localStorage.playlist
		vm.$onInit = $onInit
		
		function $onInit() {
			vm.exercicios = vm.filtrarExercicios()
			vm.academias = vm.filtrarAcademias()
			vm.artistas = vm.filtrarArtistas()
			vm.equipamentos = vm.filtrarEquipamentos()
		}
		
		vm.filtrarExercicios = function() {
			return vm.listaExercicios = vm.listaExercicios.filter(function (value) {
				return value.locais.includes($localStorage.local) && value.objetivos.includes($localStorage.objetivo.id)
			})
		};

		vm.filtrarAcademias = function() {
			return vm.listaAcademias = vm.listaAcademias.filter(function (value) {
				return value.zona == $localStorage.zonaAcademia.id
			})
		};

		vm.filtrarArtistas = function() {
			return vm.listaArtistas = vm.listaArtistas.filter(function (value) {
				return value.playlist == $localStorage.playlist
			})
		};

		vm.filtrarEquipamentos = function() {
			return vm.listaEquipamentos = vm.listaEquipamentos.filter(function (value) {
				return value.objetivos.includes($localStorage.objetivo.id)
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
			],
			"equipamento": true
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
			"objetivos": [
				1
			]
		}, {
			"id": 2,
			"name": "blabla",
			"objetivos": [
				2
			]
		}, {
			"id": 3,
			"name": "blablabla",
			"objetivos": [
				3
			]
		}]

		vm.listaAcademias = [{
			"id": 1,
			"name": "Smart Fit",
			"zona": 2
		}, {
			"id": 2,
			"name": "Arena",
			"zona": 1
		}, {
			"id": 3,
			"name": "Shape",
			"zona": 1
		}]

		vm.listaArtistas = [{
			"id": 1,
			"name": "Metallica",
			"playlist": 2
		}, {
			"id": 2,
			"name": "Katy Perry",
			"playlist": 1
		}, {
			"id": 3,
			"name": "Lady Gaga",
			"playlist": 1
		}]

    }]);
}())