"use strict";

console.log("DataFactory loaded.");

app.factory("DataFactory", function($q, $http, FBCreds, AuthFactory){

	let user = AuthFactory.getUser();

	const getPatientList = () => {
		let patients = [];
		return $q( (resolve, reject) => {
			$http.get(`${FBCreds.databaseURL}/patients.json?orderBy="uid"&equalTo="${user}"`)
			.then( (itemObj) => {
        let patientCollection = itemObj.data;
        console.log("patientCollection", patientCollection);
        Object.keys(patientCollection).forEach( (key) => {
          patientCollection[key].id = key;
          patients.push(patientCollection[key]);
        });
        resolve(patients);
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
