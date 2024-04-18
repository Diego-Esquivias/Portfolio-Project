$(function () {
    // $('.homeContent').hover(function {
    //     for (let i = 5000; i == 1000; i -= 1000) {
    //         $('.homeContent').slideDown(i)
    //         $('.homeContent').slideUp(i)
    //     }
    // })
    $('.resumeGrid').animate({
        height: '1200px'
    }, 'slow')

    setTimeout(slide, 2000)
    
    function slide(){
        $('#item-1, #item-2, #item-3, #item-4, #item-5, #item-6, #item-7, #item-8').slideDown(2000)
    }
})