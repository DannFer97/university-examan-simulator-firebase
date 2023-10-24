var questionController = angular.module('questionApp',[]);

questionController.controller('questionController',function($scope){
    
    



    $scope.addQuestion = function(){
        
        var selectTest =  angular.element('#selectInput').val();
        var question =  angular.element('#questionInput').val();
        var answer1 =  angular.element('#answer1Input').val();
        var answer2=  angular.element('#answer2Input').val();
        var answer3 =  angular.element('#answer3Input').val();
        var answer4 =  angular.element('#answer4Input').val();
        var correctAnswer =  angular.element('#correctAnswerInput').val();
           
        var newQuestionKey = database.ref().child('Extra').push().key;

            database.ref('/Extra/'+ newQuestionKey).set({
                selectTest: selectTest,
                question:question,
                answer1: answer1,
                answer2: answer2,
                answer3: answer3,
                answer4: answer4,
                correctAnswer: correctAnswer,
                questionKey: newQuestionKey
                
            });

        
            
          $scope.okMsg = 'Pregunta creada correctamente!';
            
            window.setTimeout(function(){
                window.location.href = '/Admin/preguntas.html';
            },1500);
                  
    

}

});