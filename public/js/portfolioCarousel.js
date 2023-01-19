$(document).ready(function(){
    $('#portfolio .owl-carousel').owlCarousel({
        margin:30,
        nav:true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
})

