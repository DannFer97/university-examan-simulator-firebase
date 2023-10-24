var contactController = angular.module('contactApp',[]);

contactController.controller('contactController',function($scope){
    
    $scope.crearContacto = function(){
        
        var user =  firebase.auth().currentUser;
        
        var contactName =  angular.element('#contactNameInput').val();
        var contactEmail =  angular.element('#contactEmailInput').val();
        var contactPhone =  angular.element('#contactPhoneInput').val();

        console.log('nombre: ' + contactName + ' email: ' + contactEmail + ' Phone: '+ contactPhone);
        
        var newContactKey = database.ref().child('contactos').push().key;
        
        var file = ($('#contact_file'))[0].files[0];
        
        if(!file){
            database.ref('contactos/'+user.uid+ '/' + newContactKey).set({
                contactName: contactName,
                contactEmail: contactEmail,
                contactPhone: contactPhone,
                contactKey: newContactKey,
                contactPhoto: null
            });
            
            $scope.okMsg = 'Contacto creado correctamente!';
            
            window.setTimeout(function(){
                window.location.href = '/views/main.html';
            },1500);
            
            
        }else{
            
            var storageRef = storage.ref('/contactPhoto/'+ user.uid + '/' + newContactKey + file.name);
            
            var uploadTask = storageRef.put(file);
            
            uploadTask.on('state_changed',function(snapshot){
                
            },function(error){
                console.log(error);
            },function(){
                var downloadURL = uploadTask.snapshot.downloadURL;
                
                database.ref('contactos/'+ user.uid +'/'+ newContactKey).set({
                    contactName: contactName,
                    contactEmail: contactEmail,
                    contactPhone: contactPhone,
                    contactKey: newContactKey,
                    contactPhoto: downloadURL
                });
                
                $scope.okMsg = 'Contacto creado correctamente!';
            
                window.setTimeout(function(){
                    window.location.href = '/views/main.html';
                },1500);
            
            });     
        }
        
    };    
    
});

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
      console.log('Usuario logeado!');
  } else {
    // No user is signed in.
      window.location = 'login.html';
  }
});