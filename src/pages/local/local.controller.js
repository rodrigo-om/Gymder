(function () {
    angular.module('myApp')
    .controller('LocalController', ['$localStorage', function ($localStorage) {
		var vm = this;
		vm.nextToGo = ''

		vm.localEscolhido = function (local, localPage) {
			if (!localPage) {
				localPage = local
			}
			$localStorage.local=local
			$localStorage.localpage=localPage
			vm.nextToGo=localPage
		};
    }]);
}())