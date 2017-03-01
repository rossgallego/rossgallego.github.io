require('angular');
require('bootstrap-loader');
require("../../style/main.scss");



import hero from "./directives/hero.directive.js";
import services from "./directives/services.directive.js";
import skills from "./directives/skills.directive.js";
import works from "./directives/works.directive.js";
import contactform from "./directives/contactform.directive.js";
import mainnav from "./directives/mainnav.directive.js";
// START                          
var app = angular.module('rossApp', []);

	app.directive("hero", hero);
	app.directive("services", services);
	app.directive("skills", skills);
	app.directive("works", works);
	app.directive("contactform", contactform);
	app.directive("mainnav", mainnav);



app.directive("linked", function() {
	return {
		restrict: 'C',
		link: function(scope, $elm, attrs) {
			var idToScroll = attrs.href;
			$elm.on('click', function() {
				var $target;
								// var resnav = angular.element($(".nav-responsive"));
				if (idToScroll) {
					$target = $(idToScroll);
									// resnav.toggleClass("nav-responsive-full"); 
				} else {
					$target = $elm;
				}
				$("body").animate({scrollTop: $target.offset().top}, 1000);
			});
		}
	}
});



app.directive("lk", function () {        
    return {
    	restrict : 'C',
        link: function(scope, element) {
			    element.on("click", function() {
	                 var resnav = angular.element($(".nav-responsive"));
	                 resnav.toggleClass("nav-responsive-full"); 
			    });

        }   
    }
});
