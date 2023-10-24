var userController = angular.module('userApp',[]);
userController.controller('userController',function($scope){


	firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
         $('#userNameInput').val(user.displayName);
         $('#userEmailInput').val(user.email);
          
          
        if(user.photoURL === null){
          $scope.userImgSource = '../img/usuario.png'  
        }else{
          $scope.userImgSource = user.photoURL;   
        }   
         
              
         
          
         $scope.$apply();  
          
      } else {
        // No user is signed in.
          
      }
    });
    
    $scope.updateUser = function(){
        
        var nameUser = angular.element('#userNameInput').val();
        var emailUser = angular.element('#userEmailInput').val();
        var newPassword = angular.element('#userPasswordInput').val();
        
        var user = firebase.auth().currentUser;

        user.updateProfile({
          displayName: nameUser,
          //photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(function() {
          // Update successful.
            uploadProfileImg();
            user.updateEmail(emailUser).then(function() {
              // Update successful.
                if(newPassword === null || newPassword === undefined || newPassword === ''){
                    $('#modalUser').hide();
                }else{
                  user.updatePassword(newPassword).then(function() {
                      // Update successful.
                      $('#modalUser').hide();
                    }).catch(function(error) {
                      // An error happened.
                        console.log(error);
                      
                        if(error.code === "auth/requires-recent-login"){
                          $scope.errorMsg = 'Para cambiar el password se debe realizar de nuevo un inicio de sesión reciente!'; 
                        }else if(error.code === "auth/weak-password"){
                          $scope.errorMsg = 'Password debe ser de minimo 6 carácteres!'; 
                        }
                        
                        $scope.$apply();
                    });  
                }
                
            }).catch(function(error) {
              // An error happened.
                console.log(error);
                if(error.code === "auth/requires-recent-login"){
                  $scope.errorMsg = 'Para cambiar el correo se debe realizar de nuevo un inicio de sesión reciente!';  
                }
                
                $scope.$apply();
            });
        }).catch(function(error) {
          // An error happened.
        });
    };
    
    uploadProfileImg =  function(){
        
        var user = firebase.auth().currentUser;
        
        var file = ($('#my_file'))[0].files[0];
        
        console.log(file);
        
        if(!file){
            
        }else{
            var storageRef = storage.ref('/userProfileImgs/'+file.name); 
            
            var uploadTask = storageRef.put(file);
            
            uploadTask.on('state_changed', function(snapshot){
                
            }, function(error){
                console.log(error);
            }, function(){
                console.log('Archivo o imagen subida a Firebase');
                
                var downloadURL =  uploadTask.snapshot.downloadURL;
                
                user.updateProfile({
                    photoURL : downloadURL
                });
                
                window.location.reload(true);
                
            });
        }
        
        
        
        
    };
    
        
    
    $scope.userLogout = function(){
        firebase.auth().signOut().then(function() {
          // Sign-out successful.
            window.location = '../Iniciar Sesion.html';
        }).catch(function(error) {
          // An error happened.
        });
    };

 $scope.Nota = function(){

     window.location= 'Nota.html';

  }
      $scope.Examen = function(){

		 window.location= 'Examen.html';

	}

  $scope.AddExamen = function(){

     window.location= 'Añadir Examen.html';

  }
  $scope.AddQ = function(){

     window.location= 'Preguntas.html';

  }
  

})
