

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
            $(".mobile-nav-overlay").css("display","block");
        }else{
            $(".one").css("transform","rotate(0)");
            $(".two").css("opacity","1");
            $(".three").css("transform","rotate(0)");
            $("body").css("overflow","auto");
            $(".mobile-nav-overlay").css("display","none");
        }
        i++;
    });
})
function ajaxcall(Url) {
    $.ajax({
        type: "GET",
        url: Url,
        dataType: "html",
        success: function (response) {
            $("body").html(response);
        }
    });
}
$(".hom").on("click",function (e) {
    e.preventDefault();
    ajaxcall("./index.html");
    var firstActiveClass = $(".active");
    firstActiveClass.addClass("line-bottom");
    firstActiveClass.removeClass("active");
    $(".hom").addClass("active");
    $(".hom").removeClass("line-bottom");
})
$(".abo").on("click",function (e) {
    e.preventDefault();
    ajaxcall("./about.html");
    // var firstActiveClass = $(".active");
    // console.log(firstActiveClass);
    $(".abo").addClass("active");
    $(".abo").removeClass("line-bottom");
})
$(".res").on("click",function (e) {
    e.preventDefault();
    ajaxcall("./resume.html");
    var firstActiveClass = $(".active");
    firstActiveClass.addClass("line-bottom");
    firstActiveClass.removeClass("active");
    $(".res").addClass("active");
    $(".res").removeClass("line-bottom");
})
$(".serv").on("click",function (e) {
    e.preventDefault();
    ajaxcall("./services.html");
    var firstActiveClass = $(".active");
    firstActiveClass.addClass("line-bottom");
    firstActiveClass.removeClass("active");
    $(".serv").addClass("active");
    $(".serv").removeClass("line-bottom");
})
$(".cont").on("click",function (e) {
    e.preventDefault();
    ajaxcall("./contact_us.html");
    var firstActiveClass = $(".active");
    firstActiveClass.addClass("line-bottom");
    firstActiveClass.removeClass("active");
    $(".cont").addClass("active");
    $(".cont").removeClass("line-bottom");
})
