(function () {
    angular.module('myApp')
    .controller('EquipamentosController', ['$localStorage', function ($localStorage) {
		var vm = this;
		
		vm.equipamentoEscolhido = function(escolha) {
			$localStorage.equipamentos = escolha
		}
    }]);
}())