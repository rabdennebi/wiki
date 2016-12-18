angular.module ('starter.viewArticleForm', ['starter.services'])

.config(function($stateProvider) {

  $stateProvider.state('viewArticleForm', {
      url: '/viewArticleForm',
      templateUrl: 'js/viewArticleForm/viewArticleForm.html',
      controller: 'viewArticleFormCtrl',
      params: {
        id: {value: null},
      },
  })
})

.controller('viewArticleFormCtrl', function ($scope, $stateParams, $ionicPopup, $state, wikiArticleFromService) {
    $scope.$on('$ionicView.enter', function(e) {
      initForm()
    })
    $scope.categorieTitle="Edition d'un article";

    function initForm(){
    //  console.log($stateParams)
      if($stateParams.id){
        wikiArticleFromService.getById($stateParams.id, function(item){
          var cheminImage='js/viewArticleForm/image/';
          //item.image=cheminImage + item.image;
          item.image=cheminImage + item.image;
          $scope.article = item
        })
      } else {
        $scope.article = {}
      }
    }
    function onSaveSuccess(){
      $state.go('viewArticleList')
    }
    $scope.saveNote = function(){
      $scope.article.id_category=1;
      if(!$scope.article.id){
      //  console.log($scope.article);
        wikiArticleFromService.createArticle($scope.article).then(onSaveSuccess)
      } else {
        wikiArticleFromService.updateArticle($scope.article).then(onSaveSuccess)
      }
    }

    $scope.confirmDelete = function(idNote) {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Supprimer un article',
        template: 'êtes vous sûr de vouloir supprimer ?'
      })

      confirmPopup.then(function(res) {
        if(res) {
          wikiArticleFromService.deleteArticle(idNote).then(onSaveSuccess)
        }
      })
    }
})
.factory ('wikiArticleFromService', function (model) {

 var factory = {
     getById : getById,
     createArticle : createArticle,
     updateArticle : updateArticle,
     deleteArticle : deleteArticle
   };
 return factory;

 function getById (id,callback) {
  // console.log(id);
   return model.query('SELECT * FROM w_article where id = ?', [id]).then(function(result){
     callback(model.fetch(result));
   });
 };

 function createArticle (Article) {
   return model.query('INSERT INTO w_article ( title, author, content, last_modif, creation, image, id_category) VALUES(?, ?, ?, ?, ?, ?, ?)',
   [Article.title, Article.author, Article.content, Article.last_modif, Article.creation, Article.image, Article.id_category]);

 };

 function updateArticle (Article) {
   return model.query('UPDATE w_article set title = ?, author = ?, content = ?, last_modif = ?, creation = ?, image = ?, content = ?  where id = ?',
   [Article.title, Article.author, Article.content, Article.last_modif, Article.creation, Article.image, Article.content, Article.id]);
 };

 function deleteArticle (id) {
   return model.query('DELETE FROM w_article where id = ?', [id]);
 };

});
