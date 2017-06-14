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

	const addPatient = (newObj) => {
		return $q( (resolve, reject) => {
			let object = JSON.stringify(newObj);
			$http.post(`${FBCreds.databaseURL}/patients.json`, object)
			.then ( (patientID) => {
				resolve(patientID);
			})
			.catch ( (error) => {
				reject(error);
			});
		});
	};

	return {
		getPatientList,
		addPatient
	};
});
