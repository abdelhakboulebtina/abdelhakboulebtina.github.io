$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    $('#submit').click((event)=>{
        var isFormValid=$('#form')[0].checkValidity()
        if(isFormValid){
        $('#submit').prop('disabled', true);
        var params={
            from_name:$('#name').val(),
            email_id:$('#email').val(),
            subject:$('#subject').val(),
            message:$('#message').val(),
        }
        emailjs.send("service_ecfae1h","template_whagfys",params).then(res=>{
            $('#name').val('')
            $('#email').val('')
            $('#subject').val('')
            $('#message').val('')
            $.notify("Message Sent:)", "success", { elementPosition:"top left" });
        })
        $('#submit').prop('disabled', false);
    }else{
        $('#form')[0].reportValidity();
    }
})

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["software engineer", "web developer", "mobile devloper", "desktop developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["software engineer", "web developer", "mobile devloper", "desktop developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});