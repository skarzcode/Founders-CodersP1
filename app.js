const date = document.querySelector(".date");
let today = new Date().toISOString().slice(0, 10)

date.innerHTML = today;