const getColor = () => {
    // hex code
    const randomNumber = Math.floor(Math.random() * 16777215)
    const randomCode = "#" + randomNumber.toString(16);
    console.log(randomNumber , randomCode);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("colorCode").innerText = randomCode;

    //this is for auto copy the random code..
    navigator.clipboard.writeText(randomCode);
};
//event call (when we press the button then color will change)
document.getElementById("btn").addEventListener(
    "click",
    getColor
)
//initial (auto) call (this is whe we refresh or open the page.. color auto change)
getColor();