angular.module ('starter.directiveCodeSQL',[])
.directive('ngCode', function() {
    return {
      scopez : {
          type : '@'
      },
     restrict : 'E',
     link: function(scope, element, attrs) {
        if(element[0].querySelector('div.content') != null){
        var gto=element[0].querySelector('div.content').innerText;
          scope.contenuDiv=gto+'heleeeedllllllllo';
        }
      },
    };
})
.directive('ngResult', function() {
  return {
     restrict: 'E',
     transclude: true,
     templateUrl: 'js/directive/directiveCodeSQL.html'
   };
});
// .directive('ngCode', function() {
//  var contenuDiv;
 //  return {
 //    scope : {
 //        type : '@'
 //    },
 //  // transclude: false,
 //   restrict : 'E',
 //   //controller : 'codeSQLCtrl',
 // templateUrl : 'js/directive/directiveCodeSQL.html',
 //   link: function(scope, element, attrs) {
 //     console.log(scope.contenuDiv=1);
 //      console.log(element[0]);
 //
 //      console.log(this.templateUrl);
 //      if(element[0].querySelector('div.list-scrollable') != null){
 //      var gto=element[0].querySelector('div.list-scrollable').innerText;
 //        scope.contenuDiv=gto+'helllllllllo';
 //        console.log(scope.contenuDiv);
 //        console.log(this.templateUrl);
 //      }
 //    },
 //  };
// });
