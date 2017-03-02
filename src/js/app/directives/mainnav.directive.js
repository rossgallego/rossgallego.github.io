var mainNav = require('../templates/mainnav.template.html');
var OnScreen = require('onscreen');

module.exports = function() { 
	return {
		template: mainNav,
		link: function(scope, $element) {
			var heroViewPort  = new OnScreen({});
			heroViewPort.on('enter', '.section-hero', (element) => {
			    $element.addClass('main-nav--light');
			});
			heroViewPort.on('leave', '.section-hero', (element) => {
			    $element.removeClass('main-nav--light');
			    console.log("dr")
			});
		}
	}
}