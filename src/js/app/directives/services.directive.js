var servicesTemplate = require('../templates/services.template.html');
var OnScreen = require('onscreen');

module.exports = function() {
	return {
		template: servicesTemplate ,
		link: function(scope, element) {	
			var os = new OnScreen();

			os.on('enter', '.service-design', (element) => {
  				$( '.service-design').addClass("service-provide__hatch")
			});
			os.on('enter', '.service-dev', (element) => {
  				$( '.service-dev').addClass("service-provide__hatch")
			});
			os.on('enter', '.service-cms', (element) => {
  				$( '.service-cms').addClass("service-provide__hatch")
			});




			os.on('leave', '.service-design', (element) => {
  				$( '.service-design').removeClass("service-provide__hatch")
			});
			os.on('leave', '.service-dev', (element) => {
  				$( '.service-dev').removeClass("service-provide__hatch")
			});
			os.on('leave', '.service-cms', (element) => {
  				$( '.service-cms').removeClass("service-provide__hatch")
			});
		}
	}
};