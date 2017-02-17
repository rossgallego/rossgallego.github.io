require('bootstrap-loader');
require("../../style/main.scss");
import 'font-awesome/scss/font-awesome.scss';  

//require('font-awesome/css/font-awesome.css');
//import 'font-awesome/scss/font-awesome.scss';  
//import $ from 'jquery';
//var m = require("./script2");


//$ = require('jquery');
//window.jQuery = $;
//require('../../../js/jquery.icheck.min.js');
//require('../../../css/checkbox/orange.css');


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