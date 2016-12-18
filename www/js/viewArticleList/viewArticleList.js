angular.module ('starter.viewArticleList', ['starter.services'])

.config(function($stateProvider) {

  $stateProvider.state('viewArticleList', {
      url: '/viewArticleList',
      templateUrl: 'js/viewArticleList/viewArticleList.html',
      controller: 'viewArticleListCtrl'
  })
})
.controller('viewArticleListCtrl', function ($scope, $ionicPlatform, $state, wikiArticleListService) {

   $scope.$on('$ionicView.enter', function(e) {
      $scope.categorieTitle="gto";
      wikiArticleListService.getAll(function(data){
         $scope.itemsList = data;
       })
   })

   $scope.gotoEdit = function(idArticle){
     $state.go('viewArticleForm', {id: idArticle})
   }
 })
.factory ('wikiArticleListService', function (model) {

  var factory = {
			getAll : getAll
		};
	return factory;

  function getAll (callback) {
    model.query("SELECT a.id, a.title, a.description, a.image FROM w_article a where a.id_category=1").then(function(result){
			callback(model.fetchAll(result));
		});
	};

});
