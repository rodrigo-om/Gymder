(function () {
	angular.module('myApp')
		.controller('LoginController', ['$localStorage','$state', function ($localStorage,$state) {
            var vm = this;
            vm.$onInit = $onInit

			function $onInit() {
                vm.isLogado = $localStorage.usuarioLogado != undefined
                if (vm.isLogado) {
                    vm.usuarioLogado = $localStorage.usuarioLogado
                }
                console.log(vm.isLogado)
			}

			vm.login = function (auth) {
                cadastros = $localStorage.cadastros
                if (cadastros) {
                    cadastros.forEach(element => {
                        if (element.email == auth.email && element.senha == auth.senha) {
                            $localStorage.local = element.local
                            $localStorage.equipamentos = element.equipamentos
                            $localStorage.zonaAcademia = element.zonaAcademia
                            $localStorage.objetivo = element.objetivo
                            $localStorage.playlist = element.playlist
                            $localStorage.usuarioLogado = element.nome
                            vm.usuarioLogado = $localStorage.usuarioLogado
                            vm.isLogado = true
                            $state.go('resultado')
                            vm.login = false
                        }
                    });
                }
            };
            
            vm.logout = function () {
                $localStorage.usuarioLogado = undefined
                vm.usuarioLogado = undefined
                vm.isLogado = false
                $state.go('home')
            }
		}]);
}())