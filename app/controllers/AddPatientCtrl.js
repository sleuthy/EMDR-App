"use strict";

console.log("AddPatientCtrl loaded");

app.controller("AddPatientCtrl", function($scope, DataFactory, AuthFactory) {

	let addPatient = function(){
		DataFactory.addPatient();
	}

})