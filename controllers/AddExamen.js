

var addExamController = angular.module('addExamApp',[]);

addExamController.controller('addExamController',function($scope){
    
    $scope.addExam = function(){
        
        
        var examName =  angular.element('#examNameInput').val();
        var questionN =  angular.element('#questionInput').val();
        

        console.log('nombre: ' + examName );
        
        var newExamKey = database.ref().child('examen').push().key;

            database.ref('examen/'+user.uid+ '/' + newExamKey).set({
                examName: examName,
                questionN:questionN,
                examKey: newExamKey
                
            });
            
          $scope.okMsg = 'Examen creado correctamente!';
            
            window.setTimeout(function(){
                window.location.href = '/Admin/index.html';
            },1500);
                  
    };    
    
});



