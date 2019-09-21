let slidesArr = []
let slides = document.getElementsByClassName('carousel-slide')
for (let i = 0; i < slides.length; i++) {
    slidesArr.push(slides[i].id)
}

let slideInterval = setInterval(nextSlide, 4000)
function previousSlide() {
    clearInterval(slideInterval)
    const current = document.getElementsByClassName('carousel-next')[0]
        || document.getElementsByClassName('carousel-slide')[slidesArr.length - 1]
    current.classList = 'carousel-slide carousel-current'
    const i = slidesArr.indexOf(current.id)
    if (i === 0) {
        //if at beggining of slide list, go to end of list
        document.getElementById(slidesArr[slidesArr.length - 1]).classList = 'carousel-slide carousel-next'
        document.getElementById(slidesArr[0]).classList = 'carousel-slide carousel-previous'
    } else {
        // go left one slide
        document.getElementById(slidesArr[i - 1]).classList = 'carousel-slide carousel-next'
        document.getElementById(slidesArr[i]).classList = 'carousel-slide carousel-previous'

    }
    slideInterval = setInterval(nextSlide, 4000)
}

function nextSlide() {
    clearInterval(slideInterval)
    const current = document.getElementsByClassName('carousel-next')[0]
        || document.getElementsByClassName('carousel-slide')[slidesArr.length - 1]
    current.classList = 'carousel-slide carousel-current'
    const i = slidesArr.indexOf(current.id)
    if (i < slidesArr.length - 1) {
        // if at end of slide list, go to beginning
        document.getElementById(slidesArr[i + 1]).classList = 'carousel-slide carousel-next'
        document.getElementById(slidesArr[i + 1]).removeAttribute('aria-hidden')
        document.getElementById(slidesArr[i]).classList = 'carousel-slide carousel-previous'
        document.getElementById(slidesArr[i]).setAttribute('aria-hidden', true)
    } else {
        // advance one slide 
        document.getElementById(slidesArr[0]).classList = 'carousel-slide carousel-next'
        document.getElementById(slidesArr[0]).removeAttribute('aria-hidden')
        document.getElementById(slidesArr[i]).classList = 'carousel-slide carousel-previous'
        document.getElementById(slidesArr[i]).setAttribute('aria-hidden', true)
    }
    slideInterval = setInterval(nextSlide, 4000)
}
