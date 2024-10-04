const LOCALSTORAGE_KEY = "panda";
const form = document.getElementById("form");
const button = document.getElementById("search");
const tgButton = document.getElementById("tgsave");
const cmButton = document.getElementById("cmsave");

const shellsearch = () => {
  const storedInfo = localStorage.getItem(LOCALSTORAGE_KEY);
  console.log("Local storage:", storedInfo); // Added missing parenthesis
};

// Ensure everything runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get info from local storage on load
  shellsearch();

  // Store info to local storage
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name");
    console.log(name.value); // Log the value of the name
    localStorage.setItem(LOCALSTORAGE_KEY, name.value);
    name.value = "";
  });

  // Save TG deals to local storage
  tgButton.addEventListener("click", (e) => {
    e.preventDefault();
    const selectedDeal = document.getElementById("tg").innerHTML;
    const selectedDealDetails = document.getElementById("tgdetails").innerText;
    const deal = { deal: selectedDeal, details: selectedDealDetails };
    const saveddeals = JSON.parse(localStorage.getItem("saveddeals")) || [];
    saveddeals.push(deal);
    localStorage.setItem("saveddeals", JSON.stringify(saveddeals));
  });

  // Save CM deals to local storage
  cmButton.addEventListener("click", (e) => {
    e.preventDefault();
    const selectedDeal = document.getElementById("cm").innerHTML;
    const selectedDealDetails = document.getElementById("cmdetails").innerText;
    const deal = { deal: selectedDeal, details: selectedDealDetails };
    const saveddeals = JSON.parse(localStorage.getItem("saveddeals")) || [];
    saveddeals.push(deal);
    localStorage.setItem("saveddeals", JSON.stringify(saveddeals));
  });

  // Initialize tooltips
  var elems = document.querySelectorAll(".tooltipped");
  M.Tooltip.init(elems, {});

  // Signup button click
  document.querySelector(".signup-today").addEventListener("click", function() {
    var email = document.querySelector(".email").value;
    console.log(email); 
  });
});