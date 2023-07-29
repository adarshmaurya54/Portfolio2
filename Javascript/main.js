

$(document).ready(function () {
    var i = 1;
    $(".hamb").on("click", function () {
        $(".mobile-screen-nav").toggle();
        if (i % 2 != 0) {
            $(".one").css("transform", "rotate(-41deg)");
            $(".one").css("transformOrigin", "right");
            $(".two").css("opacity", "0");
            $(".three").css("transform", "rotate(41deg)");
            $(".three").css("transformOrigin", "right");
            $("body").css("overflow", "hidden");
            $(".mobile-nav-overlay").css("display", "block");
            console.log("if");
        } else {
            console.log("else");
            $(".one").css("transform", "rotate(0)");
            $(".two").css("opacity", "1");
            $(".three").css("transform", "rotate(0)");
            $("body").css("overflow", "auto");
            $(".mobile-nav-overlay").css("display", "none");
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
            // Replace the entire document with the content of the new page
            document.open();
            document.write(response);
            document.close();
        }
    });
}
$(".hom").on("click", function (e) {
    e.preventDefault();
    ajaxcall("./index.html");
    $("body").css("overflow", "auto");
})
$(".abo").on("click", function (e) {
    e.preventDefault();
    ajaxcall("./about.html");
    $("body").css("overflow", "auto");
})
$(".res").on("click", function (e) {
    e.preventDefault();
    ajaxcall("./resume.html");
    $("body").css("overflow", "auto");
})
$(".serv").on("click", function (e) {
    e.preventDefault();
    ajaxcall("./services.html");
    $("body").css("overflow", "auto");
})
$(".cont").on("click", function (e) {
    e.preventDefault();
    ajaxcall("./contact_us.html");
    $("body").css("overflow", "auto");
})

