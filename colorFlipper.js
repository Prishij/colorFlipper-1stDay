const colors = ["green", "red", "rgba(139,112,200)", "#f1f5f8"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", ()=>{
    //get random number between 0-3
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}
    