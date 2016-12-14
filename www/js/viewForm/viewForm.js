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

.controller('viewFormCtrl', function ($scope, $stateParams, $ionicPopup, $state, NotesDataService) {
    $scope.$on('$ionicView.enter', function(e) {
      initForm()
    })

    function initForm(){
      console.log($stateParams.id)
      if($stateParams.id){
        NotesDataService.getById($stateParams.id, function(item){
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
        NotesDataService.createNote($scope.noteForm).then(onSaveSuccess)
      } else {
        NotesDataService.updateNote($scope.noteForm).then(onSaveSuccess)
      }
    }

    $scope.confirmDelete = function(idNote) {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Supprimer une note',
        template: 'êtes vous sûr de vouloir supprimer ?'
      })

      confirmPopup.then(function(res) {
        if(res) {
          NotesDataService.deleteNote(idNote).then(onSaveSuccess)
        }
      })
    }
});
