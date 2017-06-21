"use strict";

console.log("AddPatientCtrl loaded");

app.controller("AddPatientCtrl", function($scope, DataFactory, AuthFactory, $location, $routeParams){

	let user = AuthFactory.getUser();

	$scope.hideNav = false;
	$scope.newPatient = {
		ID: "",
		uid: user,
		movements: ""
	};

	$scope.addPatient = function(){
		DataFactory.addPatient($scope.newPatient)
		.then( (data) => {
			$location.path(`/home`);
		});
	};

});