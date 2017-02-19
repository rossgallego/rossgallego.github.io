require('bootstrap-loader');
require("../../style/main.scss");

require('jquery.appear');
require('jquery-circle-progress');

//alert(m);

const mm = "it works";
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



    $(".slideLeft").click(function(){
        $(".cbp-spmenu-left").toggleClass("cbp-spmenu-open")
    })
/*
   $("#nav-top").on("click", function(){
        $("html body").animate({"scrollTop":$("#skills").offset().top},1000);
        return false;
   });
   */
	
   $(".nav-list--link").on("click", function(){
        var thislink = "#" + $(this).attr("title");
        $("body,html").animate({"scrollTop":$(thislink).offset().top},1000);
        return false;
   });














var skillLayout = function(){
    $(".skill-layout").circleProgress({
        value: 0.75,
    size: 170,
    // size: 1000,
    fill: {
      gradient: ["rgb(0,204,255)", "rgb(0,204,255)"]
    },
    duration: 1200, 
    easing: "circleProgressEase" 
    })
};
var skillJs = function(){
  $(".skill-js").circleProgress({
      value: 0.75,
    size: 170,
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
    fill: {
      gradient: ["rgb(0,204,255)", "rgb(0,204,255)"]
    },
    duration: 1200, 
    easing: "circleProgressEase" 
  });
}
var skillVersion = function(){
  $(".skill-version").circleProgress({
      value: 0.75,
    size: 170,
    fill: {
      gradient: ["rgb(0,204,255)", "rgb(0,204,255)"]
    },
    duration: 1200, 
    easing: "circleProgressEase" 
  });
}
var skillPrer = function(){
  $(".skill-prep").circleProgress({
      value: 0.75,
    size: 170,
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
});
// $(".skill-js").appear(function() {
// });


    // skillLayout();
    // skillJs();
    // skillWp();
    // skillVersion();
    // skillPrer();
    // skillGraphic();




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
