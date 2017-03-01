require('bootstrap-loader');
require("../../style/main.scss");

require('jquery.appear');
require('jquery-circle-progress');

// require("font-awesome-webpack");
// require("font-awesome-sass-loader");




const mm = "it wo55rks";
module.exports= mm;

    $(".work-item").on("tap",function(){
        $(this).find(".work-item-overlay").addClass("opa1");
    })


// nav links scroll	
   $(".nav-list--link,.nav-responsive-list--link").on("click", function(){
        var thislink = "#" + $(this).attr("title");
        $("body,html").animate({"scrollTop":$(thislink).offset().top},1000);
        return false;
   });



// hero always full
$(window).resize(function() {
    $(".section-hero").height($(window).height());
}).resize();



// .scrollTop()
$(document).scroll(function() {
  var appSctop = $(this).scrollTop();
  var servOffset = $(".section-services").offset().top;
  if (appSctop < servOffset) {
  $(".main-nav").addClass("main-nav--light").removeClass("main-nav--dark")
  } else {
  $(".main-nav").addClass("main-nav--dark").removeClass("main-nav--light")
  }
});








var skillLayout = function(){
    $(".skill-layout").circleProgress({
        value: 0.85,
    size: 170,
    // size: 1000,
        startAngle: -8,  
    fill: {
      gradient: ["rgb(0,204,255)", "rgb(0,204,255)"]
    },
    duration: 1200, 
    easing: "circleProgressEase" 
    })
};
var skillJs = function(){
  $(".skill-js").circleProgress({
      value: 0.65,
    size: 170,
        startAngle: -8,  
    fill: {
      gradient: ["rgb(0,204,255)", "rgb(0,204,255)"]
    },
    duration: 1200, 
    easing: "circleProgressEase" 
    })
}
var skillWp = function(){
  $(".skill-wp").circleProgress({
      value: 0.75,
    size: 170,
        startAngle: -8,  
    fill: {
      gradient: ["rgb(0,204,255)", "rgb(0,204,255)"]
    },
    duration: 1200, 
    easing: "circleProgressEase",
    insertMode: 'prepend' 
  });
}
var skillVersion = function(){
  $(".skill-version").circleProgress({
      value: 0.65,
    size: 170,
        startAngle: -8,  
    fill: {
      gradient: ["rgb(0,204,255)", "rgb(0,204,255)"]
    },
    duration: 1200, 
    easing: "circleProgressEase" 
  });
}
var skillPrep = function(){
  $(".skill-prep").circleProgress({
      value: 0.85,
    size: 170,
        startAngle: -8,  
    fill: {
      gradient: ["rgb(0,204,255)", "rgb(0,204,255)"]
    },
    duration: 1200, 
    easing: "circleProgressEase" 
  })
}
var skillGraphic = function(){
  $(".skill-graphic").circleProgress({
      value: 0.75,
    startAngle: -8,  
    size: 170,
    fill: {
      gradient: ["rgb(0,204,255)", "rgb(0,204,255)"]
    },
    duration: 1200, 
    easing: "circleProgressEase" 
  });
}



$('.skill-layout').appear(function() {
  skillLayout();
  skillJs();
});
$(".skill-wp").appear(function() {
skillWp();
skillVersion();
});
$(".skill-prep").appear(function() {
skillPrep();
skillGraphic();
});



// services
$(".service-design").appear(function(){
  $(this).addClass("service-provide__hatch")
})
$(".service-dev").appear(function(){
  $(this).addClass("service-provide__hatch")
})
$(".service-cms").appear(function(){
  $(this).addClass("service-provide__hatch")
})



// nav mobile
$(".nav-responsive-open").on("click",function(){
    openResponsiveNav()
})

$(".nav-responsive-close,.nav-responsive-list--link").on("click",function(){
    closeResponsiveNav()
})

/* Open when someone clicks on the span element */
function openResponsiveNav() {
    // document.getElementById("myNav").style.width = "100%";
    $(".nav-responsive").removeClass("nav-responsive-zero").addClass("nav-responsive-full")
}
/* Close when someone clicks on the "x" symbol inside the overlay */
function closeResponsiveNav() {
    // document.getElementById("myNav").style.width = "0%";
    $(".nav-responsive").removeClass("nav-responsive-full").addClass("nav-responsive-zero")
}

