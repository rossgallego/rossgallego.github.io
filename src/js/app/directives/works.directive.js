var worksTemplate = require('../templates/works.template.html')
require('hammerjs');

module.exports  =  function() {
	return {
		restrict: 'EA',
		template: worksTemplate,
		scope: {
		work: '='
		},
		link: function(scope, element, attr) {
			$(".work-item").each(function(){   //tagname based selector
			    var mc = new Hammer(this);
			    mc.on("tap press", function() {
			    	console.log("sa sd done")
			        return false;
			    });
			});
		}
	};
}

