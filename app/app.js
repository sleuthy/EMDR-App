"use strict";

const app = angular.module("EMDR" ,["ngRoute"]);

let isAuth = (AuthFactory) => new Promise ( (resolve, reject) => {
	AuthFactory.isAuthenticated()
	.then( (userExists) => {
		if (userExists){
			console.log("Authenticated successfully!");
			resolve();
		}else {
			console.log("Not Authenticated");
			reject();
		}
	});
});

app.config( ($routeProvider) => {
	$routeProvider
	.when('/', {
    	templateUrl: 'partials/auth.html',
		controller: 'NavCtrl'
	})
	.when('/login', {
		templateUrl: 'partials/auth.html',
		controller: 'NavCtrl'
	})
	.when('/logout', {
		templateUrl: 'partials/auth.html',
		controller: 'NavCtrl'
	})
	.when('/home', {
		templateUrl: 'partials/home.html',
		controller: 'NavCtrl',
		resolve: {isAuth}
	})
	.when('/addpatient', {
		templateUrl: 'partials/addpatient.html',
		controller: 'AddPatientCtrl',
		resolve: {isAuth}
	})
	.when('/patientdata', {
		templateUrl: 'partials/patientdata.html',
		controller: 'PatientDataCtrl',
		resolve: {isAuth}
	})
	.when('/presession', {
		templateUrl: 'partials/presession.html',
		controller: 'PreSessionCtrl',
		resolve: {isAuth}
	})
	.when('/session', {
		templateUrl: 'partials/session.html',
		controller: 'SessionCtrl',
		resolve: {isAuth}
	})
	.otherwise('/');
});

app.run(($location, FBCreds) => {
	let creds = FBCreds;
	let authConfig = {
		apiKey: creds.apiKey,
		authDomain: creds.authDomain,
		databaseURL: creds.databaseURL
	};

	firebase.initializeApp(authConfig);
});