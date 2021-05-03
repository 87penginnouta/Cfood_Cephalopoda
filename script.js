/*-----loading-----*/

$(window).on("load", function () {
  $('html').css('overflow-y', 'auto');
  $(".loading_wrapper").fadeOut("slow");
  $("#bg").css('visibility', 'visible');
});

var jq = $;

AOS.init();


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
    }, 'slow'); /* 返回到最頂上 */
    return false;
  });

  /* 偵測卷軸滑動時，往下滑超過400px就讓GoTop按鈕出現 */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $('#gotop').fadeIn();
    } else {
      $('#gotop').fadeOut();
    }
  });
});

$(document).ready(function () {

  // INITIATE THE FOOTER
  siteFooter();
  // COULD BE SIMPLIFIED FOR THIS PEN BUT I WANT TO MAKE IT AS EASY TO PUT INTO YOUR SITE AS POSSIBLE
  $(window).resize(function () {
    siteFooter();
  });

  function siteFooter() {
    var siteContent = $('#bg');
    var siteContentHeight = siteContent.height();
    var siteContentWidth = siteContent.width();

    var siteFooter = $('#footer');
    var siteFooterHeight = siteFooter.height();
    var siteFooterWidth = siteFooter.width();

    console.log('Content Height = ' + siteContentHeight + 'px');
    console.log('Content Width = ' + siteContentWidth + 'px');
    console.log('Footer Height = ' + siteFooterHeight + 'px');
    console.log('Footer Width = ' + siteFooterWidth + 'px');

    siteContent.css({
      "margin-bottom": siteFooterHeight + 50
    });
  }
});