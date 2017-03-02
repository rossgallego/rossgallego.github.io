var heroTemplate = require('../templates/hero.template.html');

module.exports  = function(){
	return{
		template: heroTemplate,
		link: function(scope, element,attr){
			$(window).resize(function() {
			    $(element).height($(window).height());
			}).resize();
		}
	}
}