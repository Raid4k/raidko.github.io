jQuery(document).ready(function () {
    jQuery(".collapse_btn").on("click", function () {
        jQuery(this).prev().is(":visible") ? (jQuery(this).text("Show"), jQuery(this).prev().hide("slow")) : (jQuery(this).text("Collapse"), jQuery(this).prev().show("slow"))
    });
    jQuery(window).scroll(function () {
        jQuery(this).scrollTop() > 1 ? jQuery(".anchor-header").addClass("fixed") : jQuery(".anchor-header").removeClass("fixed")
    });
});

