"use strict";

console.log("NavCtrl loaded.");

app.controller('NavCtrl', function ($scope, AuthFactory, $window, $location) {

  $scope.isLoggedIn = false;
  $scope.navbar = true;

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      $scope.isLoggedIn = true;
      console.log("currentUser logged in", user, $scope.isLoggedIn);
    } else {
      $scope.isLoggedIn = false;
      console.log("currentUser logged in", $scope.isLoggedIn);
      $window.location.href = "#!/login";
    }
  });

  $scope.logout = () => {
    console.log("logout button was clicked");
    AuthFactory.logoutUser()
      .then(function (data) {
        console.log("logged out?", data);
        $window.location.url = "#!/";
      }, function (error) {
        console.log("an error occured on logout");
      });
  };

  $scope.googleLogIn = () => {
    console.log("you clicked login");
    let provider = new firebase.auth.GoogleAuthProvider();
    AuthFactory.authWithProvider(provider)
      .then(function (result) {
        var user = result.user.uid;
        console.log("logged in user:", user);
        $location.path("/home");
        $scope.$apply();
      }).catch(function (error) {
        console.log("there was an error with google login:", error);
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
  };

});