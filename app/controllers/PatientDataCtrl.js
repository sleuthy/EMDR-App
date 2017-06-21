"use strict";

console.log("PatientDataCtrl loaded.");

app.controller("PatientDataCtrl", function($scope, DataFactory, AuthFactory, $location, $routeParams) {

	let user = AuthFactory.getUser();
	console.log("PatientDataCtrl user is:", user);

	$scope.hideNav = false;

	$scope.patient = {
		ID: "",
		uid: user,
		speed: "",
		movements: ""
	};

	$scope.getPatient = function(){
		DataFactory.getPatient($routeParams.patientID)
		.then( (data) => {
			$scope.patient = data;
			console.log("data with key", data);
		});
	};

	$scope.getPatientList = function(){
		DataFactory.getPatientList()
		.then( (patients) => {
			$scope.patients = patients;
			console.log("patients", $scope.patients);
		});
	};

	$scope.updatePatient = function(){
		DataFactory.updatePatient($routeParams.patientID, $scope.patients)
		.then( (response) => {
			$location.path("#!/home");
		});
	};

	$scope.deletePatient = function(){
		DataFactory.deletePatient($routeParams.patientID, $scope.patients)
		.then( (response) => {
			$location.path("#!/home");
		});
	};

	$scope.getPatientList();
	$scope.getPatient();
});
