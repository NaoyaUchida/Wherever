$(function() {
    var $mainImgFirst = $(".main-image-list:first");

    $mainImgFirst.addClass("active").show();
    setInterval( function () {
        var $active = $(".main-image-list.active");
        var $next = $active.next("li").length?$active.next("li"):$mainImgFirst;
        $active.fadeOut(2000).removeClass("active");
        $next.fadeIn(2000).addClass("active");
    }, 6000);
});

$(function() {
    $("#downMenu").click(function() {
        $("html,body").animate({scrollTop:$('.main-contents').offset().top},"fast");
    });
    $(".js_moveAbout").click(function() {
        $("html,body").animate({scrollTop:$('.main-contents').offset().top},"fast");
    });
    $(".js_moveContents").click(function() {
        $("html,body").animate({scrollTop:$('.section-contents').offset().top},"fast");
    });
});