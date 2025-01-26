function countAnimation(targetNumber, elementId) {
  var currentNumber = 0;
  var increment = Math.ceil(targetNumber / 250); // Adjust increment for faster counting
  var intervalTime = 20; // Time between each increment in milliseconds

  var interval = setInterval(function() {
    currentNumber += increment;
    if (currentNumber >= targetNumber) {
      clearInterval(interval);
      currentNumber = targetNumber; // Ensure the target number is reached exactly
    }
    document.getElementById(elementId).textContent = currentNumber.toLocaleString() + '+'; // Update the display with the current number
  }, intervalTime);

}

// Example usage
countAnimation(20, 'count1'); // Start count animation for the first text
countAnimation(15, 'count2'); // Start count animation for the second text

const checkbox = document.querySelector("#hide_checkbox");
let gitLogo = document.getElementById("gitlogo");
let footerLogo = document.getElementById("footerLogo");
let topLogo = document.getElementById("topLogo");

// hide_checkbox.addEventListener("click", () => {
//   const body = document.body;

//   if (checkbox.checked) {
//     body.classList.add("light");
//     body.classList.remove("dark");
//     gitLogo.src = "images/SPARK_HUB-removebg-preview.png";
//     footerLogo.src = "images/SPARK_HUB-removebg-preview.png";
//     topLogo.src = "images/SPARK_HUB-removebg-preview.png";
//   } else {
//     body.classList.remove("dark");
//     body.classList.add("dark");
//     gitLogo.src = "images/SPARK_HUB-removebg-preview.png";
//     footerLogo.src = "images/SPARK_HUB-removebg-preview.png";
//     topLogo.src = "images/SPARK_HUB-removebg-preview.png";
//   }
// });
