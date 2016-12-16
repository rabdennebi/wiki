angular.module('starter.schemaDB', [])

.constant("DB_CONFIG",  {
    name: 'wikiDB2',
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
    },{
			name: 'w_article',
			columns: [
				{name: 'id', type: 'INTEGER  PRIMARY KEY AUTOINCREMENT'},
        {name: 'id_category', type: 'int NULL'},
				{name: 'title', type: 'varchar(255) NOT NULL'},
        {name: 'author', type: 'varchar(255) NOT NULL'},
        {name: 'content', type: 'text NOT NULL'},
				{name: 'last_modif', type: 'datetime NULL'},
				{name: 'creation', type: 'datetime NOT NULL'},
        {name: 'image', type: 'text NOT NULL'},
				{name: 'description', type: 'text NULL'}
			]
    },{
			name: 'w_image',
			columns: [
				{name: 'id', type: 'INTEGER  PRIMARY KEY AUTOINCREMENT'},
        {name: 'id_article', type: 'int NULL'},
        {name: 'id_category', type: 'int NULL'},
        {name: 'image', type: 'text NOT NULL'}
			]
    },{
			name: 'w_tag',
			columns: [
				{name: 'id', type: 'INTEGER  PRIMARY KEY AUTOINCREMENT'},
        {name: 'id_article', type: 'int NULL'},
        {name: 'id_category', type: 'int NULL'},
        {name: 'tag', type: 'text NOT NULL'}
			]
    }
    ]
});
