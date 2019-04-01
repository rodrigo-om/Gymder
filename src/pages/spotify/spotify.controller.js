(function () {
    angular.module('myApp')
    .controller('SpotifyController', ['$localStorage', function ($localStorage) {
		var vm = this
		vm.isrounded = false
		vm.routeBack = $localStorage.localPage
		vm.playlists = ["setembro.jpg", "summer.png", "trip-album-ART.jpg"]
		vm.selectedPlaylistIndex = -1

		vm.coverClicked = function($index) {
			vm.playlistSelected = vm.selectedPlaylistIndex != $index
			vm.selectedPlaylistIndex = vm.playlistSelected ? $index : -1;
			$localStorage.playlist=$index
		}
	}])
}())