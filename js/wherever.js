$(function(){
    var $content = $(".photos-list-child");

    $(document).on("click", ".country-link", function(event) {
        event.preventDefault();

        var link = $(this).attr("href");

        if(link == lastpage){
            return false;
        }else{
            $content.fadeOut("fast", function() {
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
            type: "GET",
            url: elm,
            dataType: "html",
            cache: false,
            success: function(data){
                $content.html(data).fadeIn("fast");
            },
            error:function() {
                alert("問題がありました。");
            }
        });
    }
});

$(function() {
    //windowの変数定義
    var $window = window;

    //ボタンエフェクトの関数
    function buttonTouchEffect(linkClass){

        //対象となるボタンの変数
        var $buttonTouchEffect = $(linkClass);

        //button押した時の挙動
        $buttonTouchEffect.on("click",function(e) {

            //もともとの機能を中断させる
            e.preventDefault();

            //波紋のアニメーションになる要素を追加
            $(this).append("<span></span>");

            /*追加した部分▼*/

            var $span = $(this).find("span"),　//波紋アニメーションの変数
                offSet = $(this).offset(), //ボタンの位置を取得
                offSetY = event.pageY - offSet.top, //縦のボタンの位置と押した時の座標を計算
                offSetX = event.pageX - offSet.left;　//横のボタンの位置と押した時の座標を計算

            //波紋アニメーションに計算した座標のポジションを代入
            $span.css({
                top: offSetY,
                left: offSetX
            });

            /*追加した部分▲*/

            //波紋アニメーションを1.8秒表示させてから要素を消す
            $window.setTimeout(function () {
                $span.remove();
            }, 1000);
        });
    }
    //イベント実行
    buttonTouchEffect(".header-menu-link");

    $("#downMenu").click(function() {
        $("html,body").animate({scrollTop:$(".section-about").offset().top},"fast");
    });
    $(".js_moveTop").click(function() {
        $("html,body").animate({scrollTop:$("body").offset().top},"fast");
    });
    $(".js_moveAbout").click(function() {
        $("html,body").animate({scrollTop:$(".section-about").offset().top},"fast");
    });
    $(".js_moveContents").click(function() {
        $("html,body").animate({scrollTop:$(".section-contents").offset().top - 82},"fast");
    });
    $("#pageTop").click(function() {
        $("html,body").animate({scrollTop:$("body").offset().top},"fast");
    });
});

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
    $(window).scroll(function() {
        if($("body").scrollTop() >= $(".section-about").offset().top) {
            $("header").slideDown();
            $("#pageTop").fadeIn("fast");
        } else {
            $("header").slideUp();
            $("#pageTop").fadeOut("fast");
        }
    });
});