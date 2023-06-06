let theme = localStorage.getItem('theme')
let element = document.body

if (theme == 'dark') {
  element.classList.add('dark')
}

function mode() {
  element.classList.toggle('dark')
  
  if (element.classList.value == 'dark') {
    localStorage.setItem('theme', "dark")
  } else {
    localStorage.setItem('theme', "light")
  }
}
