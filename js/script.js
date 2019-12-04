jQuery(document).ready(function() {
    jQuery(".collapse_btn").on("click", function() {
        jQuery(this).prev().is(":visible") ? (jQuery(this).text("Show"), jQuery(this).prev().hide("slow")) : (jQuery(this).text("Collapse"), jQuery(this).prev().show("slow"))
    });
    jQuery(window).scroll(function() {
        jQuery(this).scrollTop() > 1 ? jQuery(".anchor-header").addClass("fixed") : jQuery(".anchor-header").removeClass("fixed")
    });
    jQuery("#menu").on("click", "a", function(event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = jQuery(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = jQuery(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        jQuery('body,html').animate({ scrollTop: top - 90 }, 800);
        return;
    });
    document.getElementById("searchBtn").onclick = function() {
        event.preventDefault(), document.getElementById("searchWrapp").classList.toggle("show-search")
    }, document.getElementById("burgerBtn").onclick = function() {
        event.preventDefault(), document.getElementById("bodyMain").classList.toggle("no-scroll")
    };
    jQuery(document).keypress(
        function(event) {
            if (event.which == '13') {
                event.preventDefault();
            }
        });
    jQuery(document).ready(function() {
        jQuery('.search-btn').click(function() {
            jQuery(this).toggleClass('close-btn');
        });
    });


    jQuery(document).ready(function() {
        jQuery(".burger-btn").click(function() {
            jQuery(".mobile-nav").slideToggle();
        });
    });
    //news toggle

    jQuery(".news-btn").click(function() {
        jQuery(this).parent().children().children('.news-d_hidden').slideToggle('slow');
        return false;
    });
    //bonus toggle
    jQuery(".bonus_more-btn").click(function() {
        jQuery(this).parent().parent().parent().children('.bonus_hidden-info').slideToggle('slow');
        return false;
    });



});
document.getElementsByTagName('img').ondragstart = function() { return false; };

jQuery(document).mouseup(function(e) { // событие клика по веб-документу
    var div = jQuery(".probox");
    var div1 = jQuery("#ajaxsearchliteres1"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        &&
        div.has(e.target).length === 0 && !div1.is(e.target) && div1.has(e.target).length === 0) { // и не по его дочерним элементам
        document.getElementById("searchWrapp").classList.remove("show-search"); // скрываем его
    }



});