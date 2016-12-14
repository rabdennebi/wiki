angular.module ('starter.viewList', ['starter.services'])

.config(function($stateProvider) {

  // $routeProvider.when('/viewlist', {
  //   templateUrl: 'viewlist/viewlist.html',
  //     controller: 'viewListCtrl'
  // });
  $stateProvider.state('viewList', {
      url: '/viewList',
      templateUrl: 'js/viewlist/viewlist.html',
      controller: 'viewListCtrl'
  })
})
.controller('viewListCtrl', function ($scope,$ionicPlatform, $state, NotesDataService) {

   $scope.$on('$ionicView.enter', function(e) {
       NotesDataService.getAll(function(data){
         $scope.itemsList = data
       })
   })

   $scope.gotoEdit = function(idNote){
     $state.go('viewForm', {id: idNote})
   }
 });
