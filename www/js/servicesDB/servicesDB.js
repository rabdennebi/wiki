angular.module('starter.services', ['ngCordova'])
  .factory('model', function ($cordovaSQLite, $ionicPlatform, $q, DB_CONFIG) {

    var db;

    var factory = {
			fetchAll : fetchAll,
      fetch : fetch,
      query : query
		};

    $ionicPlatform.ready(function () {
      if(window.cordova){
        useSqlLite();
      } else {
        useWebSql();
      }
      initDatabase();
    });

    return factory;

    function useSqlLite() {
      db = $cordovaSQLite.openDB({
        name: DB_CONFIG.name,
        location : 'default'
      });
      console.info('Using SQLITE');
    }

    function useWebSql() {
      db = window.openDatabase(DB_CONFIG.name, '1.0', 'Note database', 200000);
      console.info('Using webSql');
    }
    function initDatabase () {
      angular.forEach(DB_CONFIG.tables, function(table) {
        var columns = [];
        angular.forEach(table.columns, function(column) {
          columns.push(column.name + ' ' + column.type);
        });
        var query = 'CREATE TABLE IF NOT EXISTS ' + table.name + ' (' + columns.join(',') + ')';
        factory.query(query);
        //factory.query('INSERT INTO w_article (id_category, title, author, content, last_modif, creation, image, description)
        //VALUES(1, "java", "rabah", "gto", 78457845, 78455899, "gto.png", "oh tu vas bien") ');
      });
    };
    function query(query, bindings) {
      bindings = typeof bindings !== 'undefined' ? bindings : [];
      var deferred = $q.defer();
      $ionicPlatform.ready(function () {
          $cordovaSQLite.execute(db, query, bindings).then(function(result){
              deferred.resolve(result);
            }, function(error){

                console.log(error);
                deferred.reject(error);
            }
          );
      });
  	  return deferred.promise;
    };

    function fetchAll(result) {
      var output = [];
      for (var i = 0 ; i < result.rows.length ; i++) {
        output.push(result.rows.item(i));
      }
      return output;
    };

    function fetch(result) {
      if(result.rows.length > 0) {
            return result.rows.item(0);
         } else {
      return null;
         }
    };
})
