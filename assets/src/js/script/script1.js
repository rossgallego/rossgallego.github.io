require('bootstrap-loader');
require("../../style/main.scss");

require('jquery.appear');
require('jquery-circle-progress');

// require("font-awesome-webpack");
require("font-awesome-sass-loader");

// var test = require('./script2');
// test();
//alert(m);

const mm = "it wo55rks";
module.exports= mm;

    $(".work-item").on("tap",function(){
        $(this).find(".work-item-overlay").addClass("opa1");
    })




/*
    $(".work-item").on("",function(){
        // $(this).find(".work-item-overlay").css("display","block");
        $(this).find(".work-item-overlay").addClass("opa1");
    })
    $(".overlay-close").on("click",function(e){
        // $(this).find(".work-item-overlay").css("display","block");
        e.stopPropagation();
        $(this).closest(".work-item-overlay").removeClass("opa1").addClass("opa0");
    })
    */
    /*
    $(".work-item").on("mouseover",function(){        // $(this).find(".work-item-overlay").css("display","block");
        $(this).find(".work-item-overlay").addClass("opa1");
    })
    $(".work-item,.overlay-close").on("mouseout",function(){
        $(this).find(".work-item-overlay").removeClass("opa1").addClass("opa0");
    })
*/



    // $(".slideLeft").click(function(){
    //     $(".cbp-spmenu-left").toggleClass("cbp-spmenu-open")
    // })
/*
   $("#nav-top").on("click", function(){
        $("html body").animate({"scrollTop":$("#skills").offset().top},1000);
        return false;
   });
   */


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




// el.appear({ force_process: true });

// el.on('appear', function() {
//   if (!inited) {
//     el.circleProgress({ value: 0.7 });
//     inited = true;
//   }
// });


/*
$(function(){
  var $ppc = $('.progress-pie-chart'),
  percent = parseInt($ppc.data('percent')),
  deg = 360*percent/100;
  if (percent > 50) {
  $ppc.addClass('gt-50');
  }
  $('.ppc-progress-fill').css('transform','rotate('+ deg +'deg)');
  $('.ppc-percents span').html(percent+'%');
});
*/
/*
var spin1 = function(){

  var $ppc = $('.progress-pie-chart');
  var percent = parseInt($ppc.data('percent'));
  var deg = 360*percent/100;
  if (percent > 50) {
  $ppc.addClass('gt-50');
  }
  $('.ppc-progress-fill').css('transform','rotate('+ deg +'deg)');
  $('.ppc-percents span').html(percent+'%');

}
$(".w").click(function(e){
  e.preventDefault();
  spin1() 
})


var spin2 = function(num){

  var $ppc2 = $('.progress-pie-chart2');
  var percent = parseInt(num);
  var deg = 360*num/100;
  if (percent > 50) {
  $ppc2.addClass('gt-502');
  }
  $('.ppc-progress-fill2').css('transform','rotate('+ deg +'deg)');
  $('.ppc-percents2 span').html(num+'%');

}
$(".x").click(function(e){
  e.preventDefault();
  spin2(73) 
})
*/

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