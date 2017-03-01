var mainNav = require('../templates/mainnav.template.html');
var OnScreen = require('onscreen');

module.exports = function() { 
	return {
		template: mainNav,
		link: function(element){
			var heroViewPort  = new OnScreen({});
			// var mainnav = $(".main-nav");
var myEl = angular.element( document.querySelector( '.main-nav' ) );



			heroViewPort.on('enter', '.section-hero', (element) => {
			    // mainnav.addClass("main-nav--light");
			    myEl.addClass('main-nav--light');
			});
			heroViewPort.on('leave', '.section-hero', (element) => {
			    // mainnav.removeClass("main-nav--dark");
			    myEl.removeClass('main-nav--light');
			});


		}
	}
}




			// skillViewPort.on('enter', '.skill-prep', (element) => {
			//     if (!element.entered) {
			// 		skillPrep();skillGraphic();
			//         element.entered = true;
			//     }
			// });