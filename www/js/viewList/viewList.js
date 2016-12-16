angular.module ('starter.viewList', ['starter.services'])

.config(function($stateProvider) {

  $stateProvider.state('viewList', {
      url: '/viewList',
      templateUrl: 'js/viewlist/viewlist.html',
      controller: 'viewListCtrl'
  })
})
.controller('viewListCtrl', function ($scope, $ionicPlatform, $state, wikiListService) {
$scope.categorieTitle="gto";
   $scope.$on('$ionicView.enter', function(e) {
       wikiListService.getAll(function(data){
         $scope.itemsList = data;
       })
   })

   $scope.gotoEdit = function(idNote){
     $state.go('viewForm', {id: idNote})
   }
 })
.factory ('wikiListService', function (model) {

  var factory = {
			getAll : getAll
		};
	return factory;

  function getAll (callback) {
    model.query("SELECT * FROM T_NOTE").then(function(result){
			callback(model.fetchAll(result));
		});
	};

});
