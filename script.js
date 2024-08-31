$(document).ready(function() {
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggLeClass('fa-x');
});

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function(){
        const header = $('header');
        const scrollPosition = $(window).scrollTop () - header.outerHeight();

        let activeSecctionIndex = 0

        if (scrollPosition <= 0) {
            header.css ('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(255, 0, 0');
        }

        sections.each(function(i){
            const section = $(this);
            const sectionTop = section.offset().top - 91;
            const sectionBottom = sectionTop + section.outerHeight();

            if(scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSecctionIndex = i;
                return false;
            }
        })
        
        navItems.removeClass('active');
        $(navItems[activeSecctionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left', 
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.container', {
        origin: 'left', 
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#banner', {
        origin: 'left', 
        duration: 1000,
        distance: '20%'
    })

    ScrollReveal().reveal('.feedback', {
        origin: 'left', 
        duration: 1000,
        distance: '20%'
    })
});
