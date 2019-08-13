jQuery(document).ready(function () {
    jQuery(".collapse_btn").on("click", function () {
        jQuery(this).prev().is(":visible") ? (jQuery(this).text("Show"), jQuery(this).prev().hide("slow")) : (jQuery(this).text("Collapse"), jQuery(this).prev().show("slow"))
    });
});
