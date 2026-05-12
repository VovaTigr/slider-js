const slides = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg'
]

const slider = document.getElementById('slider')

let i = 0

function prev() {
    if (i > 0) {
        i--
    } else {
        i = slides.length - 1
    }
    slider.setAttribute('src', slides[i])
}

function next() {
    if (i < slides.length - 1) {
        i++
    } else {
        i = 0
    }
    slider.setAttribute('src', slides[i])
}
