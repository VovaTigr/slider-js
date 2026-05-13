const slides = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg'
]

const buttonPrev = document.getElementById('buttonPrev')
const slider = document.getElementById('slider')

let i = 0
let timer;

function prev() {
    stop()
    if (i > 0) {
        i--
    } else {
        i = slides.length - 1
    }
    slider.setAttribute('src', slides[i])
}

function next() {
    stop()
    if (i < slides.length - 1) {
        i++
    } else {
        i = 0
    }
    slider.setAttribute('src', slides[i])
}

function automatic() {
    stop()
    function change() {
        if (i < slides.length - 1) {
            i++
        } else {
            i = 0
        }
        slider.setAttribute('src', slides[i])
    }

    timer = setInterval(change, 1000)
}

function stop() {
    clearInterval(timer)
}
