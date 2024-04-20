$(function () {
    // $('.homeContent').hover(function {
    //     for (let i = 5000; i == 1000; i -= 1000) {
    //         $('.homeContent').slideDown(i)
    //         $('.homeContent').slideUp(i)
    //     }
    // })
    // $('.resumeGrid').animate({
    //     height: '1200px'
    // }, 'slow')

    // setTimeout(slide, 500)
    
    // function slide(){
    //     $('#item-1, #item-2, #item-3, #item-4, #item-5, #item-6, #item-7, #item-8').slideDown(2500)
    // }

    $('#nameTitle').click(function () {
        $('#name').slideToggle(1000)
    })
    
    $('#hobbyTitle').click(function () {
        $('#hobby').slideToggle(1000)
    })

    $('#logoTitle').click(function () {
        $('#logo').slideToggle(1000)
    })

    $('#colorTitle').click(function () {
        $('#color').slideToggle(1000)
    })
})
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

function colorChange() {
    var colors = [red, orange, yellow, blue, green]
    document.getElementById('#light1').style.fill = colors(Math.floor(Math.random(colors.length)))
}