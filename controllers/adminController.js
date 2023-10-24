var adminController = angular.module('adminApp',[]);
adminController.controller('adminController',function($scope){


	firebase.auth().onAuthStateChanged(function(user) {
	  if (user) {
	    // User is signed in.
	    $('#userNameInput').val(user.displayName);
	    $('#userEmailInput').val(user.email);

	    if (user.photoURL === null){
	    	$scope.userImgSource ='../img/usuario.png'
	    }
	    else{
	    	$scope.userImgSource = user.photoURL;
	    }
	    
	    $scope.$apply();

	  } else {
	    // No user is signed in.
	    
	  }
	});


	uploadProfileImg = function(){
		var file = ($('#my_file'))[0].files[0];

	};

	$scope.adminLogout = function(){

		firebase.auth().signOut().then(function() {
		  // Sign-out successful.
		  window.location='../Iniciar Sesion.html';
		}).catch(function(error) {
		  // An error happened.
		});
	}

	$scope.updateAdmin = function(){
		var nameUser = angular.element("#userNameInput").val();
		var emailUser = angular.element("#userEmailInput").val();
		var newPassword = angular.element("#userPasswordInput").val();


		var user = firebase.auth().currentUser;

		user.updateProfile({
		  displayName: nameUser,
		  //photoURL: "https://example.com/jane-q-user/profile.jpg"
		}).then(function() {
			uploadProfileImg ();
			user.updateEmail(emailUser).then(function() {
				if(newPassword === null || newPassword === undefined || newPassword === ''){
					$('#modalUser').hide();
				} else {
					user.updatePassword(newPassword).then(function() {
			  // Update successful.
			  		$('#modalUser').hide();
				}).catch(function(error) {
				  // An error happened.
				  if (error.code === "auth/requires-recent-login"){
					 $scope.errorMsg = 'Para cambiar la contraseña de debe realizar de nuevo un inicio de sesión reciente';
				} else if (error.code === "auth/weak-password"){
					 $scope.errorMsg = 'La contraseña debe tener minimo 6 caractéres';
				}

				
				  
				  $scope.apply();
				});
				}

				
				  // Update successful.
			}).catch(function(error) {
				if (error.code === "auth/requires-recent-login"){
					 $scope.errorMsg = 'Para cambiar el correo de debe realizar de nuevo un inicio de sesión reciente';
				}
				 
						  $scope.apply();
					  // An error happened.
					});
				  // Update successful.
				}).catch(function(error) {
				  // An error happened.
				});

	}


      $scope.List = function(){

		 window.location= 'Lista.html';

	}


})



   