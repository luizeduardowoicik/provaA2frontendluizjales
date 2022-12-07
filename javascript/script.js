let slideIndex = 1;
showSlide(slideIndex);
function plusSlides(n) {
    showSlide(slideIndex+=n);
}
function currentSlide(n) {
    showSlide(slideIndex=n);
}
function showSlide(n) {
    let i;
    let slides = document.getElementsByClassName("imagensbox");
    let botoes = document.getElementsByClassName("botao");
    if (n>slides.length) {
        slideIndex=1;
    }
    if (n<1) {
        slideIndex =slide.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < botoes.length; i++) {
        botoes[i].className = botoes[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    botoes[slideIndex-1].className += " active";
}