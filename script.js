let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function prevSlide() {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
    showSlide(currentSlide);
}

function nextSlide() {
    currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
    showSlide(currentSlide);
}

// Initial display
showSlide(currentSlide);

document.getElementById("checkbtn").onclick = function() {
    document.getElementById("slider").style.display = "none";
};

document.getElementById("closebtn").onclick = function() {
    document.getElementById("slider").style.display = "block";
};