angular.module ('starter.viewForm', ['starter.services'])

.config(function($stateProvider) {

  $stateProvider.state('viewForm', {
      url: '/viewForm',
      templateUrl: 'js/viewForm/viewForm.html',
      controller: 'viewFormCtrl',
      params: {
        id: {value: null},
      },
  })
})

.controller('viewFormCtrl', function ($scope, $stateParams, $ionicPopup, $state, wikiFromService) {
    $scope.$on('$ionicView.enter', function(e) {
      initForm()
    })
$scope.categorieTitle="Edition d'une note";
    function initForm(){
      console.log($stateParams.id)
      if($stateParams.id){
        wikiFromService.getById($stateParams.id, function(item){
          $scope.noteForm = item
        })
      } else {
        $scope.noteForm = {}
      }
    }
    function onSaveSuccess(){
      $state.go('viewList')
    }
    $scope.saveNote = function(){

      if(!$scope.noteForm.id){
        wikiFromService.createNote($scope.noteForm).then(onSaveSuccess)
      } else {
        wikiFromService.updateNote($scope.noteForm).then(onSaveSuccess)
      }
    }

    $scope.confirmDelete = function(idNote) {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Supprimer une note',
        template: 'êtes vous sûr de vouloir supprimer ?'
      })

      confirmPopup.then(function(res) {
        if(res) {
          wikiFromService.deleteNote(idNote).then(onSaveSuccess)
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
   return model.query('SELECT * FROM T_NOTE where id = ?', [id]).then(function(result){
     callback(model.fetch(result));
   });
 };

 function createNote (note) {
   return model.query('INSERT INTO T_NOTE (title, content) VALUES(?, ?)',[note.title, note.content]);

 };

 function updateNote (note) {
   return model.query('UPDATE T_NOTE set title = ?, content = ? where id = ?', [note.title, note.content, note.id]);
 };

 function deleteNote (id) {
   return model.query('DELETE FROM T_NOTE where id = ?', [id]);
 };

});
