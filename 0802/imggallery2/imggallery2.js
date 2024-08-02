let slides = document.querySelectorAll('#container > img');
let prev = document.querySelector('#prev');
let next = document.querySelector('#next');

let current = 0;

prev.onclick = prevSlide;
next.onclick = nextSlide;



function showSlide(n) {
    for(let i=0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    slides[n].classList.add('active');
}

function prevSlide() {
    if(current > 0) {
        current -= 1;
    }else{
        current = slides.length - 1; //첫번째 사진에서 prev 누르면 마지막 사진으로 가도록
    }
    showSlide(current);
}

function nextSlide() {
    if(current < slides.length - 1) {
        current += 1;
    }else {
        current = 0; //마지막 사진에서 next 누르면 첫번째 사진으로 가도록
    }
    showSlide(current);
}