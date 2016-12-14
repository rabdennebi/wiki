angular.module('starter.schemaDB', [])

.constant("DB_CONFIG",  {
    name: 'wikiDB',
	version:'1.1',
	description: "database",
    tables: [
		{
			name: 'T_NOTE',
			columns: [
				{name: 'id', type: 'INTEGER  PRIMARY KEY AUTOINCREMENT'},
				{name: 'title', type: 'text NOT NULL'},
				{name: 'content', type: 'text NULL'}
			]
        }
    ]
});
