"use strict";

console.log("Session Ctrl loaded.");

app.controller("SessionCtrl", function($scope, DataFactory, AuthFactory, $location, $routeParams){

	let user = AuthFactory.getUser();

	$scope.patient = {};

	$scope.getSessionPatient = function(){
		DataFactory.getPatient($routeParams.patientID)
		.then( (sessiondata) => {
			$scope.patient = sessiondata;
			$scope.movementCount = $scope.patient.movements;
			$scope.speedCount = $scope.patient.speed;
			console.log("data from session", sessiondata);
		});
	};

	console.log("scope.patient", $scope.patient);

	// $scope.sessionOne = function(){
	// 	return {"animation-iteration-count": $scope.movementCount,
	// 			"animation-duration": "4s"};
	// };

	// $scope.sessionTwo = function(){
	// 	return {"animation-iteration-count": $scope.movementCount,
	// 			"animation-duration": "3s"};
	// };

	// $scope.sessionThree = function(){
	// 	return {"animation-iteration-count": $scope.movementCount,
	// 			"animation-duration": "2.5s"};
	// };

	// $scope.sessionFour = function(){
	// 	return {"animation-iteration-count": $scope.movementCount,
	// 			"animation-duration": "2s"};
	// };

	// $scope.sessionFive = function(){
	// 	return {"animation-iteration-count": $scope.movementCount,
	// 			"animation-duration": "1s"};
	// };

	$scope.circleAttributes = function(){
		return {"animation-iteration-count": $scope.movementCount,
				"animation-duration": "1.5s"};
	};

	$scope.resourceSession = function(){
		return {"animation-iteration-count": $scope.movementCount,
				"animation-duration": "3s"};
	};

	$scope.getSessionPatient();
});
