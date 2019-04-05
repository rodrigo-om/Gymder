(function () {
    angular.module('myApp')
    .controller('SpotifyController', ['$localStorage', function ($localStorage) {
		var vm = this
		vm.isrounded = false
		vm.routeBack = $localStorage.localPage
		vm.playlists = ["rock.jpg", "funk.jpg", "pop.jpg"]
		vm.selectedPlaylistIndex = -1

		vm.coverClicked = function($index) {
			vm.playlistSelected = vm.selectedPlaylistIndex != $index
			vm.selectedPlaylistIndex = vm.playlistSelected ? $index+1 : -1;
			$localStorage.playlist=$index+1
		}
	}])
}())