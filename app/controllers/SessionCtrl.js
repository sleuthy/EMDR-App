"use strict";

console.log("Session Ctrl loaded.");

app.controller("SessionCtrl", function($scope, DataFactory, AuthFactory, $location, $routeParams){

	// let user = AuthFactory.getUser();

	// $scope.sessionPatient = {
	// 	ID: "",
	// 	uid: user,
	// 	speed: "",
	// 	movements: ""
	// };

	// $scope.speedCount = 10;
	$scope.movementCount = 3;

	$scope.circleAttributes = function(){
		// DataFactory.getPatientList()
		// .then( (patients) => {
		// 	$scope.patients = patients;
		// 	console.log("session patient data", patients);
		// });
		return {
			"animation-iteration-count": $scope.movementCount
		 	// "animation-duration": $scope.speedCount
		 };
	};
});
