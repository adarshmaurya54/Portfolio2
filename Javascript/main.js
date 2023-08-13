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
    $('.bg').on('contextmenu', function (e) {
        e.preventDefault();
    });
})
function ajaxcall(Url) {
    $(".mobile-screen-nav").hide();
    $(".main-loader").css("display", "flex");
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

function internetCheck() {
    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/posts",
        success: function (response) {

        },
        error: function (error) {
            $("#wait-msg").html("Please check your internet or refresh the page!");
        }
    });
}
setInterval(function () {
    internetCheck();
}, 1000)
var independenceDayDate = "1947/08/13";
function calculateYear(date) { // birthday is a date
    // Below one is the single line logic to calculate the no. of years...
    var years = new Date(new Date() - new Date(date)).getFullYear() - 1970;
    console.log(years);
    return years;
}
function checkdate(){
    let date = new Date();
    let todayDate = date.getDate();
    let currentMonth = date.getMonth() + 1;
    if((todayDate == 14 || todayDate == 15) && currentMonth == 8){
        $(".other-msgs").css("display","flex");
        $(".msg").html(`HAPPY ${calculateYear(independenceDayDate)}th INDEPENDENCE DAY`);
        $(".fa-close").on("click",function(){
            $(".other-msgs").css("display","none");
        })
        $(".container").css("background","linear-gradient(140deg,#FF993371 , #fafafa71,#13880871)")
        $(".navbar").css("background","linear-gradient(140deg,#FF993371 , #fafafa71,#13880871)")
        $("footer").css("background","linear-gradient(140deg,#FF993371 , #fafafa71,#13880871)")
        $(".mobile-screen-nav").css("background","linear-gradient(140deg,#FF993371 , #fafafa71,#13880871)");
    }
    let audio = new Audio("../musics/1st.mp3");
    
}
checkdate();

