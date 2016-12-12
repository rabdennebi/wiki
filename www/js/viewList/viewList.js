angular.module ('starter.viewList', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/viewlist', {
    templateUrl: 'viewlist/viewlist.html',
      controller: 'viewListCtrl'
  });
}])
.controller('viewListCtrl', function ($scope,$ionicPlatform, $state, NotesDataService) {

   $scope.$on('$ionicView.enter', function(e) {
       NotesDataService.getAll(function(data){
         $scope.itemsList = data
       })
   })

   $scope.gotoEdit = function(idNote){
     $state.go('form', {id: idNote})
   }
 });