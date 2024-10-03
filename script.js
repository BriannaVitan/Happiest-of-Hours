const form = document.getElementById("form");
const button = document.getElementById("search");
const LOCALSTORAGE_KEY = "panda";

const shellsearch=() => {
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
 shellsearch()
});


// get info from local storage
