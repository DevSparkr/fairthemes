jQuery(document).ready(function($){

    // Scroll to top
    $("body").prepend(
        '<div class="go-top"><span id="top"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="20"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" /></svg></span></div>'
    );
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 500) {
            $(".go-top").fadeIn(600);
        } else {
            $(".go-top").fadeOut(600);
        }
    });
    $("#top").click(function () {
        $("body, html").animate({ scrollTop: 0 }, 800);
    });

    // sticky menu
    // $(window).scroll(function () {
    //     if ($(window).scrollTop() > 100) {
    //         $(".entire-header").addClass("scrolled");
    //     } else {
    //         $(".entire-header").removeClass("scrolled");
    //     }
    // });

    // header menu
    $(".h-menu li ul")
        .parents("li")
        .addClass("has-children")
        .prepend(
            '<i><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg></i>'
        );

    // mobile menu
    $(".h-menu").clone().appendTo(".m-menu");
    var headerHeight = $(".entire-header").outerHeight();
    $(".mobile-menu").css({top: headerHeight +'px'});
    $(window).resize(function () {
        var headerHeight = $(".entire-header").outerHeight();
        $(".mobile-menu").css({ top: headerHeight + "px" });
    });
    $(".menutrigger").on("click", function () {
        $(this).toggleClass("active");
        $(".mobile-menu").toggleClass("menu-opened");
        $("body").toggleClass("menu-opened");
    });
    $(".m-menu-body li i").on("click", function () {
        $(this).parent().children("ul").slideToggle();
    });

})