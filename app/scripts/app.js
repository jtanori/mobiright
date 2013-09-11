/* global define */
define(['templates/bar'], function(barTemplate){
	'use strict';
	var App = function(host, id){
		this.id = id;
		this.host = host;

		var content = '';

		var render = function(res){
			res.host = host;
			content = barTemplate(res);
		};

		this.getContent = function(){
			return content;
		};

		return {
			getContent: this.getContent,
			render: render
		};
	};

	return App;
});