var audio = new Audio("do.mp3");
function doit() {
    audio.play();
}
var d = new Date();

$(function(){
	var d = new Date();

	var h = d.getHours();
	if(h > 18){
		$(".lay").css("background-color", "#000");
		$(".lay > .fa-apple").css("color", "#fff")
	}
		else{
			$(".lay").css("background-color", "#fff");
			$(".lay > .fa-apple").css("color", "#000")
		}
	
})
        var n = d.getDay(7); 

$(document).ready(function (){
            $("#mainimg").animate({
                width: '100%',
            }, "slow");
    $("#thex").css("opacity", "0");
        });  
       
function night() { 
    $(".menu").css("background", "#232323")
    $(".father, .sub-drop, .sub-drop1").css("background", "#343434");
    $("#mainimg").attr("src", "2.png");
    $("body").css("background-color", "#444");
    $("#vid").css({
        background_size: "200%",
        border: "2px solid white"
    });
    $("#content p").css("color", "#fff");
    $(".but2").css("background", "#323232");
    audio.play();
} 
function changer() {
switch (new Date ().getDay()){
case 1:
  $("#mainimg").attr("src", "1.jpg");
            $(".menu, .father").css("background", "linear-gradient(140deg, #89216B, #DA4453)");
  $(".sub-drop, .sub-drop1").css("background-color", "#DA4453");
            $(".address").css("color", "#DA4453");
            $("#content a").css("color", "#89216B");
			$(".fa-arrow-circle-right, .fa-arrow-circle-left").css("color", "#00382F");

break;
case 2:
 $("#mainimg").attr("src", "2.jpg");
              $(".menu, .father").css("background", "linear-gradient(140deg, #02111D, #037BB5, #02111D)");
$(".sub-drop, .sub-drop1").css("background-color", "#02111D");
            $(".address").css("color", "#037BB5");
					$(".fa-arrow-circle-right, .fa-arrow-circle-left").css("color", "#032A43")



break;
case 3:
            $("#mainimg").attr("src", "3.jpg");
    $(".menu, .father").css("background", "linear-gradient(140deg, #C70E88, #631384)");
            $("#content a").css("color", "#C70E88");
            $(".sub-drop").css("background", "#631384");
            $(".sub-drop1").css("background", "#631384");
            $(".address").css("color", "#631384");
			$(".fa-arrow-circle-right, .fa-arrow-circle-left").css("color", "#723C72");


break;
case 4:
            $("#mainimg").attr("src", "5.jpg");
         $(".menu, .father").css("background", "linear-gradient(140deg, #FC5C7D, #6A82FB)");
            $("#content a").css("color", "#6A82FB");
            $(".sub-drop, .sub-drop1").css("background-color", "#FC5C7D");
            $(".address").css("color", "#6A82FB");
			$(".fa-arrow-circle-right, .fa-arrow-circle-left").css("color", "#750000")


    break;
case 5:
             $("#mainimg").attr("src", "4.jpg");
             $(".menu, .father").css("background", "linear-gradient(140deg, #00F260, #0575E6)");
             $("#content a").css("color", "#00F260");
             $(".sub-drop, .sub-drop1").css("background-color", "#00F260");
            $(".address").css("color", "#214B76");
            $("#source a:nth-child(2)").css("color", "#214B76");
			$(".fa-arrow-circle-right, .fa-arrow-circle-left").css("color", "#214B76");
  

break;
case 6:
             $("#mainimg").attr("src", "6.jpg");
            $(".menu, .father").css("background", "linear-gradient(140deg, #cc5333, #23074d)");
   $(".sub-drop, .sub-drop1").css("background-color", "#23074d");
            $(".address").css("color", "#cc5333");
             $("#content a").css("color", "#ff4500");
			$(".fa-arrow-circle-right, .fa-arrow-circle-left").css("color", "#7D9F11")


break;
case 0:
             $("#mainimg").attr("src", "first.png");
            $(".menu, .father").css("background", "linear-gradient(140deg, #190A05, #870000)");
             $("#content a").css("color", "#E32425");
               $(".sub-drop, .sub-drop1").css("background-color", "#870000");
            $(".address").css("color", "#870000");
			$(".fa-arrow-circle-right, .fa-arrow-circle-left").css("color", "#9A0300")


break;
        }
}
changer();
                   $("#source").css("color", "gray");
            function Scroll3(){
                    pyoff = window.pageYOffset;
if(pyoff > 200) {
	
    $(".menu").css("opacity", ".5");
    $(".menu").css("height", "80px");
    $(".think").css("visibility", "hidden");
        $("#mover").fadeIn();
} 

else{
    $(".menu").css("opacity", "1");
    $(".menu").css("height", "110px");
    $(".think").css("visibility", "visible");
    $(".menu").hover(function () {
       $(this).css("opacity", "1");
    })
    $("#mover").fadeOut();
    
}}
	window.addEventListener("scroll",Scroll3);

$(".parents").click(function () {
    $("html, body").animate({
        scrollTop: $("#parents").offset().top
    }, 1000)
});
$(".birth").click(function () {
    $("html, body").animate({
        scrollTop: $("#birth").offset().top
    }, 1000)
});
$(".pre").click(function () {
    $("html, body").animate({
        scrollTop: $("#pre-apple").offset().top
    }, 1000)
});
$(".next").click(function () {
    $("html, body").animate({
        scrollTop: $("#nextcomputer").offset().top
    }, 1000)
});
$(".family").click(function () {
    $("html, body").animate({
        scrollTop: $("#family").offset().top
    }, 1000)
});
$(".return").click(function () {
    $("html, body").animate({
        scrollTop: $("#returntoapple").offset().top
    }, 1000)
});
$(".death").click(function () {
    $("html, body").animate({
        scrollTop: $("#death").offset().top
    }, 1000)
});
$(".mac").click(function () {
    $("html, body").animate({
        scrollTop: $("#mac").offset().top
    }, 1000)
});
$(".ipad").click(function () {
    $("html, body").animate({
        scrollTop: $("#ipad").offset().top
    }, 1000)
});
$(".iphone").click(function () {
    $("html, body").animate({
        scrollTop: $("#iphone").offset().top
    }, 1000)
});
$(".ipod").click(function () {
    $("html, body").animate({
        scrollTop: $("#ipod").offset().top
    }, 1000)
});
$("#mover").click(function () {
    $("html, body").animate({
        scrollTop:0
    }, 1000)
});
$(document).ready(function() {
    $(".father").slideToggle();
})
$(".cont").on("click", function() {
    "use strict";
    $(".father").slideToggle();
    $(this).toggleClass("change");
});
$(".father > ul > li > a").on("click", function () {
    $(".father").slideToggle();
    $(".cont").toggleClass("change");
    
})
$(".menu").on("click", function(){
    $(this).css("opacity", "1");
});
$(function (){
    "use strict";
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop(),
            divOffset = $("#thex").offset().top;
        if(scrolling >= divOffset) {
            $("#thex").css("opacity", "1");
        }
        else{
            $("#thex").css("opacity", "0");
        }
    })
})
$(function (){
    "use strict";
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop(),
            divOffset = $(".allred").offset().top;
        if(scrolling >= divOffset) {
            $(".allred").css("opacity", "1");
        }
        else{
            $(".allred").css("opacity", "0");
        }
    })
})
    function day() {
               changer();
                $("body").css("background-color", "white");
    $("#content p").css("color", "darkgrey");          

                $("#vid").css("background-size", "200%");
     $(".but1, .but2").css(
    "background", "transparent"
    );               
        audio.play();
}       
$(".fa-apple").click(function () {
    location.reload();
});