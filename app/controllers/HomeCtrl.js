"use strict";

console.log("Home Ctrl js loaded.");

app.controller("HomeCtrl", function($scope, DataFactory, AuthFactory) {

	let user = AuthFactory.getUser();

	let getPatientList = function(){
		DataFactory.getPatientList();
	};

	getPatientList();
});