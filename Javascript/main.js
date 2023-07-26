const typed = new Typed('#typed', {
    strings: ['web developer.', 'software engineer.'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1500,
    loop: true,
});

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