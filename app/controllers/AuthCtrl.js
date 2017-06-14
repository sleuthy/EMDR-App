"use strict";

app.controller("AuthCtrl", ["$scope", "AuthFactory", "$window", "$location",
	function($scope, AuthFactory, $window, $location){
		console.log('AuthCtrl js is loaded');

		$scope.logout = function(){
			AuthFactory.logoutUser()
			.then(function(){
				$location.path('/');
				$scope.$apply();
				console.log("logout function is running correctly");
			}, function(error){
				console.log('There was an error logging user out');
			});

		};

		$scope.googleLogIn = function(){
			AuthFactory.getUser();
			AuthFactory.authWithProvider()
			.then(function(){
				AuthFactory.getUser();
				$location.path('/home');
				$scope.$apply();
			})
			.catch(function(error){
				console.log(error);
			});
		};
}]);