"use strict";

console.log("PatientDataCtrl loaded.");

app.controller("PatientDataCtrl", function($scope, DataFactory, AuthFactory, $location, $routeParams) {

	$scope.hideNav = false;

	$scope.patient = {
		ID: "",
		speed: "",
		movements: ""
	};

	let user = AuthFactory.getUser();
	console.log("PatientDataCtrl user is:", user);

	DataFactory.getPatient($routeParams.patientID)
	.then( (stuff) => {
		$scope.patient = stuff;
		$scope.patientID = $routeParams.patientID;
	});

	$scope.submitPatient = function(){
		DataFactory.updatePatient($routeParams.patientID, $scope.patients)
		.then( (response) => {
			$location.path("#!/home");
		});
	};
});


// deletePatient function to be added