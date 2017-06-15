"use strict";

console.log("HomeCtrl loaded.");

app.controller("HomeCtrl", function($scope, DataFactory, AuthFactory) {

	$scope.hideNav = false;

	let user = AuthFactory.getUser();
	console.log("HomeCtrl user is:", user);

	$scope.getPatientList = function(){
		DataFactory.getPatientList()
		.then( (patients) => {
			$scope.patients = patients;
			console.log("patients", $scope.patients);
		});
	};

$scope.getPatientList();

});