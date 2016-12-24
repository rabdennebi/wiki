angular.module ('starter.directiveCodeSQL',[]);
.directive('ngCode', function() {
    var directive = {
      scope:{
        theme : '@',
        type : '@',
        istrue : '@'
      },
      //transclude: true,
      //templateUrl: 'js/directive/directiveCodeSQL.html',
     restrict : 'C',
     //require : '^^viewArticleFormCtrl',
     //priority : 1,
     link: function(scope, element, attrs) {
                  //iAttrs.$observe('type', function(value) {  console.log(value); scope.type = value;  });

                  attrs.$observe('id', function(value) {
                    scope.id = value;
                    console.log('istrue '+scope.istrue);
                    console.log('istrue '+scope.id);
                    console.log('istrue '+scope.theme);
                    console.log('istrue '+scope.type);
                    if (scope.istrue===true) {
                       console.log('ok condition');
                       var editor = ace.edit(editor);
                       editor.setTheme('ace/theme/'+ scope.theme);
                       editor.getSession().setMode('ace/mode/'+scope.type);
                      }
                    });
        }
      };
return directive;
  });

    //  link: function(scope, element, attrs) {
    //       console.log(element);
    //       console.log(scope);
    //       console.log('type :' + scope.type);
    //       console.log('theme :' + scope.theme);
    //       console.log('id :' + scope.id);
    //       console.log('isTrue :' + scope.isTrue);
    //       console.log(attrs);
    //       console.log('type :' + attrs.style);
    //       console.log('theme :' + attrs.$attr.theme);
    //       console.log('id :' + attrs.id);
    //       console.log('isTrue :' + attrs.isTrue);
    //       // gto(scope);
    //       // scope.type= 'javascript' ;
    //       // scope.theme= 'monokai' ;
    //       // scope.id=  'editor1';
    //       // scope.isTrue=  'true';
    //        if (scope.isTrue) {
    //          console.log('ok condition');
    //          var editor = ace.edit(scope.id);
    //          editor.setTheme('ace/theme/'+ scope.theme);
    //          editor.getSession().setMode('ace/mode/'+content);
    //        }
    //  },

// .directive('ngCode', function() {
//     return {
//       scope : {
//           type : '@',
//           theme : '@',
//           id:'@'
//       },
//     restrict : 'C',
//     controller: ['$scope', function MyTabsController($scope) {
//
//         switch (scope.type) {
//           case 'css':
//             content='javascript';
//             break;
//           case 'java':
//             content='javascript';
//             break;
//           case 'js':
//           content='javascript';
//             break;
//             case 'text':
//
//               break;
//           default:
//             content = 'error format \n' + content;
//         }
//         console.log(scope.id);
//         var editor = ace.edit(scope.id+'1');
//         editor.setTheme('ace/theme/'+ scope.theme);
//         editor.getSession().setMode('ace/mode/'+content);
//
//
//      }
//    };
// });
