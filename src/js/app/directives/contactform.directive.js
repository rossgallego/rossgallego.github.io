var formTemplate = require('../templates/contactform.template.html')

module.exports  =  function() { 
    return {
      link: function(scope, element, attr) {
      },
      template: formTemplate
    }
};