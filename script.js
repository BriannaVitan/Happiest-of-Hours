const form = document.getElementById("form");
const button = document.getElementById("cool");


// store info to local storage
form.addEventListener("submit", (e) => {
  const lastname = document.getElementById("first_name").value;
    e.preventDefault();
  console.log(lastname);
  localStorage.setItem("panda", lastname);
});


// get info from local storage
button.addEventListener("click", (e) => {
    e.preventDefault();
  const storedInfo = localStorage.getItem("panda");
  const outputH1 = document.getElementById("output");

  outputH1.innerHTML = storedInfo;
});