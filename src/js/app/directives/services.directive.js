// var servicesTemplate = require('../templates/services.template.html');
var OnScreen = require('onscreen');

module.exports = function() {
	return {
		// template: servicesTemplate ,
		link: function(scope, element) {	
			var os = new OnScreen();
			angular.forEach(angular.element, function(){
				os.on('enter', '.service-design', () => {
	  				element.addClass("service-provide__hatch")
				});
			});
			      
			angular.forEach(angular.element, function(){
				os.on('leave', '.service-design', () => {
	  				element.removeClass("service-provide__hatch")
				});
			});
		}
	}
};