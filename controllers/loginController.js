var loginController = angular.module('loginApp',[]);
loginController.controller('loginController',function($scope){

	$scope.loginUser = function(){


		var email=$scope.loginEmailInput;
		var password=$scope.loginPasswordInput;
		console.log(email);
		console.log(password);

		firebase.auth().signInWithEmailAndPassword(email, password).then(function(res){
		window.location= 'Producto%20de%20Unidad/Estudiante/index.html';	
		}).catch(function(error) {
  // Handle Errors here.
			  var errorCode = error.code;
			  var errorMessage = error.message;
			  // ...
			  if(errorCode === 'auth/user-not-found'){
 	      	$scope.errorMsg = 'Usuario no registrado';
 	        $scope.$apply();
 	      }

 	      if(errorCode === 'auth/wrong-password'){
 	      	$scope.errorMsg = 'Password incorrecta';
 	        $scope.$apply();
 	      }
 	       if(errorCode === 'auth/user-disabled'){
 	      	$scope.errorMsg = 'El Usuario ha sido deshabilitado por el Administrador';
 	        $scope.$apply();
 	      }

 	      $scope.errorMsg = errorMessage;
 	      $scope.$apply();


			});


 	    };

$scope.loginAdmin = function(){


		var email=$scope.loginEmailInput;
		var password=$scope.loginPasswordInput;
		console.log(email);
		console.log(password);

		firebase.auth().signInWithEmailAndPassword(email, password).then(function(res){
		window.location= 'Producto%20de%20Unidad/Admin/index.html';	
		}).catch(function(error) {
  // Handle Errors here.
			  var errorCode = error.code;
			  var errorMessage = error.message;
			  // ...
			  if(errorCode === 'auth/user-not-found'){
 	      	$scope.errorMsg = 'Usuario no registrado';
 	        $scope.$apply();
 	      }

 	      if(errorCode === 'auth/wrong-password'){
 	      	$scope.errorMsg = 'Password incorrecta';
 	        $scope.$apply();
 	      }
 	       if(errorCode === 'auth/user-disabled'){
 	      	$scope.errorMsg = 'El Usuario ha sido deshabilitado por el Administrador';
 	        $scope.$apply();
 	      }

 	      $scope.errorMsg = errorMessage;
 	      $scope.$apply();


			});


 	    };

  $scope.loginGoogle = function(){
 	    	var provider = new firebase.auth.GoogleAuthProvider();
				 firebase.auth().signInWithPopup(provider).then(function(result) {
				  window.location= '/Estudiante/index.html';	
				  // This gives you a Google Access Token. You can use it to access the Google API.
				  var token = result.credential.accessToken;
				  // The signed-in user info.
				  var user = result.user;
				  // ...
				}).catch(function(error) {
				  // Handle Errors here.
				  var errorCode = error.code;
				  var errorMessage = error.message;
				  // The email of the user's account used.
				  var email = error.email;
				  // The firebase.auth.AuthCredential type that was used.
				  var credential = error.credential;
				  // ...
				});

 	    };

 	 



 
 	
});
  
   firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log('Usuario logeado');
  } else {
    // No user is signed in.
    window.location='Evaluacion.html';
  }
});
