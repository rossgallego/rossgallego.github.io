var heroTemplate = require('../templates/hero.template.html');

module.exports  = function(){
	return{
		scope:{},
		template: heroTemplate,
		link: function(scope, element){
			$(window).resize(function() {
			    $(".section-hero").height($(window).height());
			}).resize();
		}
	}

}