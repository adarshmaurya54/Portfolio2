$(".main-loader").css("display", "none");
$(document).ready(function () {
    var i = 1;
    $(".hamb").on("click", function () {
        if (i % 2 != 0) {
            $(".one").css("transform", "translateY(250%) rotate(-41deg)");
            $(".one").css("transformOrigin", "center");
            $(".two").css("opacity", "0");
            $(".three").css("transform", "translateY(-250%) rotate(41deg)");
            $(".three").css("transformOrigin", "center");
            $("body").css("overflow", "hidden");
            $(".mobile-nav-overlay").css("display", "block");
            $(".mobile-screen-nav").css("opacity", "1");
            $(".mobile-screen-nav").css("z-index", "3");
        } else {
            $(".one").css("transform", "rotate(0)");
            $(".two").css("opacity", "1");
            $(".three").css("transform", "rotate(0)");
            $("body").css("overflow", "auto");
            $(".mobile-nav-overlay").css("display", "none");
            $(".mobile-screen-nav").css("opacity", "0");
            $(".mobile-screen-nav").css("z-index", "-1");
        }
        i++;
    });
    $('.bg').on('contextmenu', function (e) {
        e.preventDefault();
    });
})

$(".hom").on("click", function (e) {
    window.location.href = "./index.html";
    $("body").css("overflow", "auto");
})
$(".abo").on("click", function (e) {
    window.location.href = "./about.html";
    $("body").css("overflow", "auto");
})
$(".res").on("click", function (e) {
    window.location.href = "./resume.html";
    $("body").css("overflow", "auto");
})
$(".serv").on("click", function (e) {
    window.location.href = "./services.html";
    $("body").css("overflow", "auto");
})
$(".cont").on("click", function (e) {
    window.location.href = "./contact_us.html";
    $("body").css("overflow", "auto");
})

function validate(e, className, error, errormsg) {
    if ($(e).val().trim() == "") {
        $("." + className).html(`<i class="fa-solid fa-circle-xmark" style="color: #bd0202;"></i>`);
        $("." + error).css("display", "flex");
        $("." + errormsg).html(className + " field is require!");
    } else {
        $("." + className).html(`<i class="fa-solid fa-circle-check" style="color: #02bd2e;"></i>`);
        $("." + error).css("display", "none");
    }
}
function validateEmail(e, className) {
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    if (regex.test($(e).val().trim())) {
        $("." + className).html(`<i class="fa-solid fa-circle-check" style="color: #02bd2e;"></i>`);
        $(".error2").css("display", "none");
    } else {
        $(".error2").css("display", "flex");
        $(".error-msg2").html("Invalid email!");
        $("." + className).html(`<i class="fa-solid fa-circle-xmark" style="color: #bd0202;"></i>`);
    }
}


