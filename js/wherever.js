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

$(function(){
    var $content = $('.photos-list');

    $(document).on('click', '.country-link', function(event) {
        event.preventDefault();

        var link = $(this).attr("href");

        if(link == lastpage){
            return false;
        }else{
            $content.fadeOut(600, function() {
                getPage(link);
            });

            lastpage = link;
        }

    });
    //初期設定
    getPage("japan.html");
    var lastpage = "japan.html";

    function getPage(elm){
        $.ajax({
            type: 'GET',
            url: elm,
            dataType: 'html',
            cache: false,
            success: function(data){
                $content.html(data).fadeIn(600);
            },
            error:function() {
                alert('問題がありました。');
            }
        });
    }
});