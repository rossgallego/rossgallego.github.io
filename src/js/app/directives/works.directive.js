var worksTemplate = require('../templates/works.template.html')
require('hammerjs');

module.exports  =  function() { 
    return {
      link: function(scope, element, attr) {
			$(".work-item").each(function(){   //tagname based selector
			    var mc = new Hammer(this);
			    mc.on("tap press", function() {
			        // console.log(' tap!');
			        //$(myElement).toggleClass('liked');
			        return false;
			    });
			});


      },
      template: worksTemplate
    }
};