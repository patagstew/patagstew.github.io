const na = document.querySelector("#name");
const h2 = document.querySelector("h2");
const favspecies = document.querySelector("#favspecies");




//methods
//change the header text
favspecies.oninput = function(){
    h2.innerText = "I like to hunt " + favspecies.value;
}
