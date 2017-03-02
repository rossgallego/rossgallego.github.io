require('angular');
require('bootstrap-loader');
require("../../style/main.scss");
require('jquery-circle-progress');

import worksController from "./controllers/works.controller.js";

import hero from "./directives/hero.directive.js";
import servicesItem from "./directives/services.directive.js";
import skills from "./directives/skills.directive.js";
import work from "./directives/works.directive.js";
import contactform from "./directives/contactform.directive.js";
import mainnav from "./directives/mainnav.directive.js";


// START                          
var app = angular.module('rossApp', []);

	app.controller("worksController", worksController);

	app.directive("hero", hero);
	app.directive("worksController", worksController);
	app.directive("servicesItem", servicesItem);
	app.directive("skills", skills);
	app.directive("work", work);

	app.directive("contactform", contactform);
	app.directive("mainnav", mainnav);


	app.directive("linked", function() {
		return {
			restrict: 'C',
			link: function(scope, $elm, attrs) {
				var idToScroll = attrs.href;
				$elm.on('click', function() {
					var $target;
					if (idToScroll) {
						$target = $(idToScroll);
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