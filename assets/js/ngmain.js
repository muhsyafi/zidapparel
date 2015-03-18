var app = angular.module('coba',[]);

app.controller('cobaCtrl',function($scope){
	$scope.isi = [
		{'nama':'Udin','pacar':'Vita'},
		{'nama':'Vita','pacar':'Udin'}
	]
});