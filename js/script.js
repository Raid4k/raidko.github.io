jQuery(document).ready(function () {
    jQuery(".collapse_btn").on("click", function () {
        jQuery(this).prev().is(":visible") ? (jQuery(this).text("Show"), jQuery(this).prev().hide("slow")) : (jQuery(this).text("Collapse"), jQuery(this).prev().show("slow"))
    });
    jQuery(window).scroll(function () {
        jQuery(this).scrollTop() > 1 ? jQuery(".anchor-header").addClass("fixed") : jQuery(".anchor-header").removeClass("fixed")
    });
    jQuery("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = jQuery(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = jQuery(id).offset().top;
        
        //анимируем переход на расстояние - top за 1500 мс
        jQuery('body,html').animate({scrollTop: top - 90}, 800);
        return;
    });
    document.getElementById("searchBtn").onclick = function () {
        event.preventDefault(), document.getElementById("searchWrapp").classList.toggle("show-search")
    }, document.getElementById("burgerBtn").onclick = function () {
        event.preventDefault(), document.getElementById("bodyMain").classList.toggle("no-scroll")
    };
    jQuery(document).keypress(
        function (event) {
            if (event.which == '13') {
                event.preventDefault();
            }
        });
        jQuery(document).ready(function () {
            jQuery('.search-btn').click(function () {
                jQuery(this).toggleClass('close-btn');
            });
        });
      
        
        jQuery(document).ready(function(){
            jQuery(".burger-btn").click(function(){
                jQuery(".mobile-nav").slideToggle();
            });
        });
        //news toggle
        jQuery(document).ready(function(){
            jQuery(".news-btn").click(function(){
                jQuery(".news-d_hidden").slideToggle();
            });
        });
        
});

