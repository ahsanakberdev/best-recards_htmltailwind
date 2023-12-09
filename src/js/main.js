function openMenu(){
    document.getElementById("mobileNav").classList.toggle("active");
}

$(function () {
    $(document).scroll(function () {
        var $nav = $(".sticky");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

    












