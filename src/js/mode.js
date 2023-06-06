const theme = localStorage.getItem("theme");
const element = document.body;

if (theme == "dark") {
  element.classList.add("dark");
}

function mode() {
  element.classList.toggle("dark");
}
