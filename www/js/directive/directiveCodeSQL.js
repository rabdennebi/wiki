angular.module ('starter.directiveCodeSQL',[])
.directive('ngResult', function() {
  return {
     restrict: 'E',
     transclude: true,
     templateUrl: 'js/directive/directiveCodeSQL.html'
   };
});
.directive('ngCode', function() {
    return {
      scopez : {
          type : '@'
      },
     restrict : 'E',
     link: function(scope, element, attrs) {
        if(element[0].querySelector('div.content') != null){
        var content=element[0].querySelector('div.content').innerText;
        switch ($scope.type) {
          case 'css':

            break;
          case 'java':

            break;
          case 'js':

            break;
            case 'text':

              break;
          default:
            content = 'error format \n' + content;
        }
          scope.contenuDiv=content;
        }
      },
    };
})
