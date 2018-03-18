//メニュー
    $(function(){
        $(document).ready(function(){
            $("#sp_navi_btn").click(function(){
            $(this).next().slideToggle();
                });
            });
        });

//TOPページ カルーセル
    $(document).ready(function(){
        $('.owl-carousel').owlCarousel(
            {
                loop: true,
                nav: false,
                dots: true,
                items: 1,
                autoplay: true
            }
        );
    });
 
//商品ページ スライドショー
    $(window).load(function(){
        $("#list_img img").click(function(){
            var img_src = $(this).attr("src");
            $("#display_img .display_img_main img").attr("src", img_src);
        });
    });

    
//サイドメニュー
    $(function(){
        $(document).ready(function(){
            $(".acmenu_btn").click(function(){
            $(this).next().slideToggle();
                });
            });
        });
        
    
    $(function(){
        $(document).ready(function(){
            $(".categories_btn").click(function(){
            $(this).next().slideToggle();
                });
            });
        });