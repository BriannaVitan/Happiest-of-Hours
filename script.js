const form = document.getElementById("form");
const button = document.getElementById("cool");



// get info from local storage
button.addEventListener("click", (e) => {
    e.preventDefault();
    
  // retrieve deal information
  const deal = {}
  // retrieving saved deals from local storage or setting up an empty array for deals 
  const saveddeals = JSON.parse (localStorage.getItem("saveddeals")) ||[]
  saveddeals.push (deal)
  localStorage.setItem ("saveddeals",JSON.stringify(saveddeals))
});


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.tooltipped');
  var instances = M.Tooltip.init(elems, options);
});

