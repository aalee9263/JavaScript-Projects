const endDate = "28 Feb 2024 12:53 AM"
document.getElementById("end-date").innerHTML = endDate;
const inputs = document.querySelectorAll("input")

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;
    // console.log(diff);
    if (diff < 0) return;
    // console.log(Math.floor(diff / 3600 / 24));
    //convert into days
    inputs[0].value=Math.floor(diff / 3600 / 24);
    //convert into hour
    inputs[1].value=Math.floor(diff / 3600) % 24;
    //convert into mints
    inputs[2].value=Math.floor(diff / 60) % 60;
    //convert into sec
    inputs[3].value=Math.floor(diff) % 60;
}
//initial call (auto start the function)
clock()

/**
 1 day = 24 hr
 1 hr = 60 mints
 60 mint = 3600 sec
 */


 // ye function hr second k baad pora function clock() ko call kry ga.

 setInterval(
    () => {
        clock()
    },
    1000
 );