"use strict";

console.log("DataFactory loaded.");

app.factory("DataFactory", ($q, $http, FBCreds, AuthFactory) => {

	const getPatientList = () => {
		let patients = [];
		return $q( (resolve, reject) => {
			$http.get(`${FBCreds.databaseURL}/patients.json`)
			.then(function(patients){
			resolve(patients.data);
			})
			.catch( (error) => {
				reject(error);
			});
		});
	};

	return {
		getPatientList
	};
});
