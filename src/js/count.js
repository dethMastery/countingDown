const countingContainer = document.querySelector('#timeCount')

let x = setInterval(function () {
  const currentTime = new Date().getTime() - 1686762000000

  // let day = Math.floor(currentTime / (1000 * 60 * 60 * 24))
  let hour = Math.floor((currentTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let min = Math.floor((currentTime % (1000 * 60 * 60)) / (1000 * 60))
  let sec = Math.floor((currentTime % (1000 * 60)) / 1000)
  let dateLine = `${hour} : ${min} : ${sec}`
  countingContainer.innerHTML = `<h1>
  ${dateLine}
</h1>`
}, 1000)
