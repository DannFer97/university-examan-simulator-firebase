var mainController = angular.module('mainApp',[]);

mainController.controller('mainController',function($scope){
    
     $scope.Matematicas = function(){

     window.location= 'Matematicas.html';

  }
   $scope.Literatura = function(){

     window.location= 'Literatura.html';

  }
   $scope.CNaturales = function(){

     window.location= 'CNaturales.html';

  }
   $scope.CSociales = function(){

     window.location= 'CSociales.html';

  }
    
    
});
