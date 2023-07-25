const typed = new Typed('#typed', {
    strings: ['web developer.', 'graphics designer.', 'software engineer.'],
    typeSpeed: 100,
    backSpeed: 150,
    loop: true,
});

$(document).ready(function(){
    var i = 1;
    $(".hamb").on("click", function () {
        $("#navLinks").slideToggle("slow");
        if(i%2 != 0){
            $(".one").css("transform","rotate(-41deg)");
            $(".one").css("transformOrigin","right");
            $(".two").css("opacity","0");
            $(".three").css("transform","rotate(41deg)");
            $(".three").css("transformOrigin","right");
            $( ".navbar" ). animate({ marginBottom: "160px" }, 500 );
        }else{
            $(".one").css("transform","rotate(0)");
            $(".two").css("opacity","1");
            $(".three").css("transform","rotate(0)");
            $( ".navbar" ). animate({ marginBottom: "0px" }, 500 );
        }
        i++;
    });
})