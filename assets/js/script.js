const form = document.getElementById("form");
const button = document.getElementById("search");
const LOCALSTORAGE_KEY = "panda";
const tgButton = document.getElementById("tgsave");
const cmButton = document.getElementById("cmsave");

const shellsearch = () => {
  const storedInfo = localStorage.getItem(LOCALSTORAGE_KEY);
  const outputH1 = document.getElementById("output");
  outputH1.textContent = storedInfo;
};

// store info to local storage
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  console.log(name);
  localStorage.setItem(LOCALSTORAGE_KEY, name);
  shellsearch();
});

get info from local storage
tgButton.addEventListener("click", (e) => {
  e.preventDefault();
  const selectedDeal = document.getElementById("tg").innerHTML;
  const selectedDealDetails = document.getElementById("tgdetails").innerText;
  // retrieve deal information
  const deal = { deal: selectedDeal, details: selectedDealDetails };
  // retrieving saved deals from local storage or setting up an empty array for deals
  const saveddeals = JSON.parse(localStorage.getItem("saveddeals")) || [];
  saveddeals.push(deal);
  localStorage.setItem("saveddeals", JSON.stringify(saveddeals));
});

cmButton.addEventListener("click", (e) => {
  e.preventDefault();
  const selectedDeal = document.getElementById("cm").innerHTML;
  const selectedDealDetails = document.getElementById("cmdetails").innerText;
  // retrieve deal information
  const deal = { deal: selectedDeal, details: selectedDealDetails };
  // retrieving saved deals from local storage or setting up an empty array for deals
  const saveddeals = JSON.parse(localStorage.getItem("saveddeals")) || [];
  saveddeals.push(deal);
  localStorage.setItem("saveddeals", JSON.stringify(saveddeals));
});

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".tooltipped");
  var instances = M.Tooltip.init(elems, options);
  
});

document.querySelector(".signup-today") .addEventListener("click",function() {
  var email = document.querySelector(".email").value;
  console.log(email); 
});