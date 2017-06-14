"use strict";

const app = angular.module('EMDR' ,["ngRoute"]);

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
		controller: 'AuthCtrl'
	})
	.when('/login', {
		templateUrl: 'partials/auth.html',
		controller: 'AuthCtrl'
	})
	.when('/logout', {
		templateUrl: 'partials/auth.html',
		controller: 'AuthCtrl'
	})
	.when('/home', {
		templateUrl: 'partials/home.html',
		controller: 'HomeCtrl',
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