

$(document).ready(function(){
    var i = 1;
    $(".hamb").on("click", function () {
        $(".mobile-screen-nav").toggle();
        if(i%2 != 0){
            $(".one").css("transform","rotate(-41deg)");
            $(".one").css("transformOrigin","right");
            $(".two").css("opacity","0");
            $(".three").css("transform","rotate(41deg)");
            $(".three").css("transformOrigin","right");
            $("body").css("overflow","hidden");
        }else{
            $(".one").css("transform","rotate(0)");
            $(".two").css("opacity","1");
            $(".three").css("transform","rotate(0)");
            $("body").css("overflow","auto");
        }
        i++;
    });
})