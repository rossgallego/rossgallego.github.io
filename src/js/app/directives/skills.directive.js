require('jquery-circle-progress');
var OnScreen = require('onscreen');
var skillsTemplate = require('../templates/skills.template.html');

module.exports  = function() {
	return {
		// restrict: 'E',
		template: skillsTemplate,
		link: function(scope, element) {

			var skillTrade = function(){
			    $('.skill-trade').circleProgress({
					value: 0.10,
					size: 170,
					startAngle: -8,  
					fill: {
						gradient: ["rgb(0,204,255)", "rgb(0,204,255)"]
					},
					duration: 2000, 
					easing: "circleProgressEase" 
			    });	
			}

			var skillLayout = function(){
			    $(".skill-layout").circleProgress({
			        value: 0.85
			    })
			};
			var skillJs = function(){
			  $(".skill-js").circleProgress({
			      value: 0.65
			    })
			}
			var skillWp = function(){
			  $(".skill-wp").circleProgress({
			      value: 0.75
			  });
			}
			var skillVersion = function(){
			  $(".skill-version").circleProgress({
			      value: 0.65
			  });
			}
			var skillPrep = function(){
			  $(".skill-prep").circleProgress({
			      value: 0.85
			  })
			}
			var skillGraphic = function(){
			  $(".skill-graphic").circleProgress({
			      value: 0.75
			  });
			}

			var skillViewPort  = new OnScreen({});
			var skillViewPort2  = new OnScreen({});
			var skillViewPort3  = new OnScreen({});

			skillViewPort.on('enter', '.skill-layout', (element) => {
			    if (!element.entered) {
			        skillTrade();skillLayout();skillJs()
			        element.entered = true;
			    }
			});
			skillViewPort2.on('enter', '.skill-wp', (element) => {
			    if (!element.entered) {
					skillWp();skillVersion();
			        element.entered = true;
			    }
			});
			skillViewPort3.on('enter', '.skill-prep', (element) => {
			    if (!element.entered) {
					skillPrep();skillGraphic();
			        element.entered = true;
			    }
			});



		}
	}
};