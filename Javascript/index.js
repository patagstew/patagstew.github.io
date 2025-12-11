const na = document.querySelector("#name");
const h2 = document.querySelector("h2");
const favspecies = document.querySelector("#favspecies");




//methods
//change the header text
favspecies.oninput = function(){
    h2.innerText = "I like to hunt " + favspecies.value;
}


function calculateYield() {
        const weight = parseFloat(document.getElementById("weightInput").value);

        if (isNaN(weight) || weight <= 0) {
            alert("Please enter a valid positive number for weight.");
            return;
        }

        let yieldPercent;

        // CONDITIONAL LOGIC
        if (weight < 100) {
            yieldPercent = 0.35;   // small deer
        } else if (weight >= 100 && weight <= 150) {
            yieldPercent = 0.40;   // medium deer
        } else {
            yieldPercent = 0.45;   // large deer
        }

        const meat = weight * yieldPercent;

        // Display results
        const resultBox = document.getElementById("result");
        resultBox.style.display = "block";
        resultBox.innerHTML = `
            <strong>Deer Weight:</strong> ${weight} lb<br>
            <strong>Yield Percentage:</strong> ${(yieldPercent * 100).toFixed(0)}%<br>
            <strong>Estimated Edible Meat:</strong> ${meat.toFixed(2)} lb
        `;
    }