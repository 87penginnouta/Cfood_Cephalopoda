/*-----loading-----*/

$(window).on("load", function () {
  $('html').css('overflow-y', 'auto');
  $(".loading_wrapper").fadeOut("slow");
  $("#bg").css('visibility', 'visible');
});


/*-----aos-----*/

AOS.init();


/*-----視差-----*/

var s = skrollr.init();


/*-----錨點-----*/
$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
      this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate({
            scrollTop: target.offset().top
          },
          1000
        );
        return false;
      }
    }
  });
});


/*-----返回頂端-----*/

$(function () {
  /* 按下GoTop按鈕時的事件 */
  $('#gotop').click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, 'slow'); 
    return false;
  });

  /* 往下滑超過就讓GoTop按鈕出現 */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $('#gotop').fadeIn();
    } else {
      $('#gotop').fadeOut();
    }
  });
});
