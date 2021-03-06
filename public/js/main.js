// Set the require.js configuration for your application.
require.config({
	urlArgs: "bust=" + (new Date()).getTime(),
    shim: {
        'underscore': {
            exports: '_'
        },
        'underscore-string': {
            deps: [
                'underscore'
            ]
        },
        'handlebars-orig': {
            exports: 'Handlebars'
        },
        'backbone': {
            deps: [
                'underscore',
                'underscore-string',
                'jquery'
            ],
            exports: 'Backbone'
        },
        'backbone-queryparams': {
            deps: [
                'backbone'
            ]
        },
        'backbone-datagrid': {
            deps: [
                'backbone'
            ],
            exports: 'Backbone.Datagrid'
        },
        'backbone-paginator': {
            deps: [
                'backbone'
            ],
            exports: 'Backbone.Paginator'
        },
        'bootstrap': {
            deps: [
                'jquery'
            ]
        },
        'backbone-relational': {
            deps: [
                'backbone'
            ]
        },
        'keymaster': {
            exports: 'key'
        },
        'async': {
            exports: 'async'
        },
        "jquery-plugin": {
            exports: "$",
            deps: ['jquery']
        }
    },

    // Libraries
    paths: {
        jquery: 'lib/jquery/jquery',
        'jquery-plugin' : 'lib/jquery/jquery-plugin',
        underscore: 'lib/underscore',
        'underscore-string': 'lib/underscore-string',
        backbone: 'lib/backbone',
        resthub: 'lib/resthub/resthub',
        localstorage: 'lib/localstorage',
        text: 'lib/text',
        i18n: 'lib/i18n',
        pubsub: 'lib/resthub/pubsub',
        'bootstrap': 'lib/bootstrap',
        'backbone-validation-orig': 'lib/backbone-validation',
        'backbone-validation': 'lib/resthub/backbone-validation-ext',
        'handlebars-orig': 'lib/handlebars',
        'handlebars': 'lib/resthub/handlebars-helpers',
        'backbone-queryparams': 'lib/backbone-queryparams',
        'backbone-datagrid': 'lib/backbone-datagrid',
        'backbone-paginator': 'lib/backbone-paginator',
        'backbone-relational': 'lib/backbone-relational',
        async: 'lib/async',
        keymaster: 'lib/keymaster',
        hbs: 'lib/resthub/require-handlebars',
        moment: 'lib/moment',
        template: '../template',
		json2: 'lib/json2',
        console: 'lib/resthub/console'
    },

    locale: localStorage.getItem('locale') || 'zh-cn'
});

window.contextBase = window.location.pathname.split("/")[1] + "/";


// Load our app module and pass it to our definition function
require(['console'],function(){
	if (/^()\/login.*/.test(location.pathname)){
		require(['login']);	
	}else{
		require(['app']);
	}
	
});
