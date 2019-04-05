(function () {
	angular.module('myApp')
		.controller('ResultadoController', ['$localStorage', '$http', function ($localStorage, $http) {
			var vm = this;
			vm.local = $localStorage.local
			vm.equipamentos = $localStorage.equipamentos
			vm.zonaAcademia = $localStorage.zonaAcademia
			vm.objetivo = $localStorage.objetivo
			vm.playlist = $localStorage.playlist
			if (vm.playlist === 1) {
				vm.nomePlaylist = "Rock Pesadão pra pegar pesadão"
			} else if (vm.playlist === 2) {
				vm.nomePlaylist = "Malhando na Gaiola"
			} else if (vm.playlist === 3) {
				vm.nomePlaylist = "Pop suavão"
			}
			vm.$onInit = $onInit

			function $onInit() {
				$http.get('src/pages/resultado/equipamentos.json').
					then(function (data, status, headers, config) {
						vm.listaEquipamentos = data.data;
						vm.equipamentos = vm.filtrarEquipamentos()
					});

				$http.get('src/pages/resultado/exercicios.json').
					then(function (data, status, headers, config) {
						vm.listaExercicios = data.data;
						vm.exercicios = vm.filtrarExercicios()
					});

				$http.get('src/pages/resultado/academias.json').
					then(function (data, status, headers, config) {
						vm.listaAcademias = data.data;
						vm.academias = vm.filtrarAcademias()
					});

				$http.get('src/pages/resultado/artistas.json').
					then(function (data, status, headers, config) {
						vm.listaArtistas = data.data;
						vm.artistas = vm.filtrarArtistas()
					});
			}

			vm.filtrarExercicios = function () {
				return vm.listaExercicios = vm.listaExercicios.filter(function (value) {
					return value.locais.includes($localStorage.local) && value.objetivos.includes($localStorage.objetivo.id)
				})
			};

			vm.filtrarAcademias = function () {
				return vm.listaAcademias = vm.listaAcademias.filter(function (value) {
					return value.zona == $localStorage.zonaAcademia.id
				})
			};

			vm.filtrarArtistas = function () {
				return vm.listaArtistas = vm.listaArtistas.filter(function (value) {
					return value.playlist == $localStorage.playlist
				})
			};

			vm.filtrarEquipamentos = function () {
				return vm.listaEquipamentos = vm.listaEquipamentos.filter(function (value) {
					return value.objetivos.includes($localStorage.objetivo.id)
				})
			};

			vm.cadastrar = function (user) {
				console.log(user)
				user.local = vm.local
				user.equipamentos = vm.equipamentos
				user.zonaAcademia = vm.zonaAcademia
				user.objetivo = vm.objetivo
				user.playlist = vm.playlist
				if ($localStorage.cadastros == undefined) {
					$localStorage.cadastros = [];	
				}
				$localStorage.cadastros.push(user);
				vm.cadastroSucesso = true
			}
		}]);
}())