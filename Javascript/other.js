
var independenceDayDate = "1947/08/13";
function calculateYear(date) { // birthday is a date
    // Below one is the single line logic to calculate the no. of years...
    var years = new Date(new Date() - new Date(date)).getFullYear() - 1970;
    return years;
}
const targetDate = new Date('2023/8/15').getTime();

const countdownElement = document.getElementById('countdown');
function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;
    if (timeRemaining <= 0) {
        countdownElement.innerHTML = ``;
        clearInterval(interval);
    }
    else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}
const interval = setInterval(updateCountdown, 1000);
let audio;
function checkdate() {
    let date = new Date();
    let todayDate = date.getDate();
    let currentMonth = date.getMonth() + 1;
    if ((todayDate == 14 || todayDate == 15) && currentMonth == 8) {

        $(".other-msgs").css("display", "flex");
        $(".message").html(`<p>HAPPY ${calculateYear(independenceDayDate) + 1}th INDEPENDENCE DAY</p>`);
        $(".fa-close").on("click", function () {
            $(".other-msgs").css("display", "none");
            audio.remove();
        })
        $(".container").css("background", "linear-gradient(140deg,#FF993371 , #fafafa71,#13880871)")
        $(".navbar").css("background", "linear-gradient(140deg,#FF993371 , #fafafa71,#13880871)")
        $("footer").css("background", "linear-gradient(140deg,#FF993371 , #fafafa71,#13880871)")
        $(".mobile-screen-nav").css("background", "linear-gradient(140deg,#FF993371 , #fafafa71,#13880871)");
        // audio =  new Audio("../musics/1st.mp3");
        // audio.play();
        var audio = document.createElement(`iframe`)
        document.body.appendChild(audio);
        audio.src = "./musics/1st.mp3"
        audio.setAttribute("allow", "autoplay");

        // audio.play(); 
    }
}

checkdate();
