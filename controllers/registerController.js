var registerController = angular.module('registerApp',[]);

registerController.controller('registerController',function($scope){

	$scope.registerUser = function(){


		var email=$scope.emailRegisterInput;
		var password=$scope.passwordRegisterInput;
		console.log(email);
		console.log(password);

		firebase.auth().createUserWithEmailAndPassword(email, password).then(function(res){
		window.location= '/Estudiante/index.html';	
		}).catch(function(error) {
  // Handle Errors here.
		  var errorCode = error.code;
 	      var errorMessage = error.message;

 	      console.log(error);
 	      if(errorCode === 'auth/email-already-in-use'){
 	      	$scope.errorMsg = 'El email ya se encuentra utilizado por otra cuenta';
 	        $scope.$apply();
 	      }

 	      if(errorCode === 'auth/weak-password'){
 	      	$scope.errorMsg = 'El password debe tener un minimo de 6 caractéres';
 	        $scope.$apply();
 	      }

 	      $scope.errorMsg = errorMessage;
 	      $scope.$apply();
  // ...
});
	}




	$scope.registerAdmin = function(){


		var email=$scope.emailRegisterInput;
		var password=$scope.passwordRegisterInput;
		console.log(email);
		console.log(password);

		firebase.auth().createUserWithEmailAndPassword(email, password).then(function(res){
		window.location= '/Admin/index.html';	
		}).catch(function(error) {
  // Handle Errors here.
		  var errorCode = error.code;
 	      var errorMessage = error.message;

 	      console.log(error);
 	      if(errorCode === 'auth/email-already-in-use'){
 	      	$scope.errorMsg = 'El email ya se encuentra utilizado por otra cuenta';
 	        $scope.$apply();
 	      }

 	      if(errorCode === 'auth/weak-password'){
 	      	$scope.errorMsg = 'El password debe tener un minimo de 6 caractéres';
 	        $scope.$apply();
 	      }

 	      $scope.errorMsg = errorMessage;
 	      $scope.$apply();
  // ...
});
	}





})

