const form = document.getElementById("form");
const button = document.getElementById("search");
const LOCALSTORAGE_KEY = "panda";

const shellsearch=() => {
  const storedInfo = localStorage.getItem(LOCALSTORAGE_KEY);
  const outputH1 = document.getElementById("");
  outputH1.textContent = storedInfo;
};

// store info to local storage
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name")
  console.log(name);
  localStorage.setItem(LOCALSTORAGE_KEY, name.value);
  name.value = "";
 shellsearch()
});


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

