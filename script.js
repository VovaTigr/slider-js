const slides = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg'
]

const slider = document.getElementById('slider')
const effect = "fade";

let i = 0

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
  // if (i < slides.length - 1) {
  //     i++
  // } else {
  //     i = 0
  // }
  // slider.setAttribute('src', slides[i])
  addEffect(); // додаємо ефект fade (клас fade)
  t = setTimeout(changeNext, 500); // виконаємо функцію changeNext через 500 мс
  t = setTimeout(removeEffect, 1000); // виконаємо функцію removeEffect через 1000 мс
}

function changeNext() {
  i++;
  if (i >= slides.length) {
    i = 0;
  }
  slider.setAttribute("src", slides[i]);
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

    timer = setInterval(change, 1500)
}

function stop() {
    clearInterval(timer)
}

function addEffect() {
  slider.classList.add(effect);
}

function removeEffect() {
  slider.classList.remove(effect);
}
