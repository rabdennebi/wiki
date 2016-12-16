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
      console.log($stateParams.id)
      if($stateParams.id){
        wikiArticleFromService.getById($stateParams.id, function(item){
          $scope.article = item
        })
      } else {
        $scope.article = {}
      }
    }
    function onSaveSuccess(){
      $state.go('viewList')
    }
    $scope.saveNote = function(){

      if(!$scope.article.id){
        wikiArticleFromService.createNote($scope.article).then(onSaveSuccess)
      } else {
        wikiArticleFromService.updateNote($scope.article).then(onSaveSuccess)
      }
    }

    $scope.confirmDelete = function(idNote) {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Supprimer un article',
        template: 'êtes vous sûr de vouloir supprimer ?'
      })

      confirmPopup.then(function(res) {
        if(res) {
          wikiArticleFromService.deleteNote(idNote).then(onSaveSuccess)
        }
      })
    }
})
.factory ('wikiFromService', function (model) {

 var factory = {
     getById : getById,
     createNote : createNote,
     updateNote : updateNote,
     deleteNote : deleteNote
   };
 return factory;

 function getById (id,callback) {
   return model.query('SELECT * FROM w_article where id = ?', [id]).then(function(result){
     callback(model.fetch(result));
   });
 };

 function createArticle (Article) {
   return model.query('INSERT INTO w_article ( title, author, content, last_modif, creation, image, content) VALUES(?, ?, ?, ?, ?, ?, ?)',
   [Article.title, Article.author, Article.content, Article.last_modif, Article.creation, Article.image, Article.content]);

 };

 function updateArticle (Article) {
   return model.query('UPDATE w_article set title = ?, author = ?, content = ?, last_modif = ?, creation = ?, image = ?, content = ?  where id = ?',
   [Article.title, Article.author, Article.content, Article.last_modif, Article.creation, Article.image, Article.content]);
 };

 function deleteArticle (id) {
   return model.query('DELETE FROM w_article where id = ?', [id]);
 };

});
