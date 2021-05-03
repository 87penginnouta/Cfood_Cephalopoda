AOS.init();

/*-----loading-----*/

$(window).on("load", function () {
    $('html').css('overflow-y', 'auto');
    $(".loading_wrapper").fadeOut("slow");
    $("#img_content").css('visibility', 'visible');
});