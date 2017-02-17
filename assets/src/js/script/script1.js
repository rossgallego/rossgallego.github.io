require('bootstrap-loader');
require("../../style/main.scss");

//alert(m);

const mm = "it works";
module.exports= mm;


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
        $("html body").animate({"scrollTop":$(thislink).offset().top},1000);
        return false;
   });