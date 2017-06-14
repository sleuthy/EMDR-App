"use strict";

console.log("HomeCtrl loaded.");

app.controller("HomeCtrl", function($scope, DataFactory, AuthFactory) {

	let user = AuthFactory.getUser();
	console.log("HomeCtrl user is:", user);

	let getPatientList = function(){
		DataFactory.getPatientList()
		.then( (patients) => {
			let array = $(patients).filter(function(index, obj){
				return obj.uid !== user;
			});
			$scope.patientList = array;
			console.log("array of patients", array);
		});
	};
	getPatientList();
});