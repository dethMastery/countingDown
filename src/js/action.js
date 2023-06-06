import month from './month.js'

const params = new URLSearchParams(window.location.search)
const date = params.get('date')
const time = params.get('time')

console.log(date, time)

let dateArray = date.split('-')
dateArray[1] = month(dateArray[1])

const constDate = new Date(
  `${dateArray[1]} ${dateArray[2]} ${dateArray[0]} ${time}`
).getTime()

const countingContainer = document.querySelector('#countingA')

let heading = document.createElement('h2')
let div = document.createElement('h1')
heading.innerHTML = 'Time Left..'

countingContainer.appendChild(heading)
countingContainer.appendChild(div)

let x = setInterval(function () {
  const currentTime = new Date().getTime()
  const timeDiff = constDate - currentTime

  let day = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
  let hour = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let min = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))
  let sec = Math.floor((timeDiff % (1000 * 60)) / 1000)
  let dateLine = `${day}d ${hour}h ${min}m ${sec}s`

  const dateLib = document.querySelector("#countingA > h1")
  dateLib.innerHTML = dateLine

  if (time < 0) {
    clearInterval(x)
    countingContainer.innerHTML = 'Your counting down is end!'
  }
}, 1000)
