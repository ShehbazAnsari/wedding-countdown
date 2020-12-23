
//Important Notes -->> All the date are in second

//Wedding Date
const weddingDate = new Date('Jan 4, 2021 00:00:00').getTime()

//Passing All the values
document.getElementById('day').innerHTML = `<div class="spinner-border text-secondary" role="status">
  <span class="sr-only">Loading...</span>
</div>`
document.getElementById('hour').innerHTML = `<div class="spinner-border text-secondary" role="status">
  <span class="sr-only">Loading...</span>
</div>`
document.getElementById('minute').innerHTML = `<div class="spinner-border text-secondary" role="status">
  <span class="sr-only">Loading...</span>
</div>`
document.getElementById('second').innerHTML = `<div class="spinner-border text-success" role="status">
  <span class="sr-only">Loading...</span>
</div>`

function weddingCountdown() {

    //Current Date
    const now = new Date().getTime()

    //Gap Between Wedding Date And Current Date
    const gap = weddingDate - now

    //Taking All the values in second
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    //Getting All the value
    const d = Math.floor(gap / (day))
    const h = Math.floor((gap % (day)) / hour)
    const m = Math.floor((gap % (hour)) / minute)
    const s = Math.floor((gap % (minute)) / second)

    //Passing All the values
    document.getElementById('day').innerText = d
    document.getElementById('hour').innerText = h
    document.getElementById('minute').innerText = m
    document.getElementById('second').innerText = s


}

//Calling Function after one second
setInterval(() => weddingCountdown(), 1000)