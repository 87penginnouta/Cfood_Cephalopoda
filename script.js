/*-----loading-----*/

$(window).on("load", function () {
  $('html').css('overflow-y', 'auto');
  $(".loading_wrapper").fadeOut("slow");
  $("#bg").css('visibility', 'visible');
});

var jq = $;

AOS.init();

var scrollObj = skrollr.init({
  //跟smoothScrolling的功能，主要都是讓scroll事件不要這麼敏感，動畫才不會看起來卡卡的。
  smoothScrolling: true,
  smoothScrollingDuration: 200,

  //可以定義一些常數在影格使用，Example: data-_myconst-200 and skrollr.init({constants: {myconst: 300}}) result in data-500.

  constants: {
    initTop: 100
  },

  //可以調整ScrollBar往下拉對應到keyframe的值等倍放大
  scale: 1,

  //讓文本高度自動達到滿足Keyframe的條件
  //forceHeight: true,

  //針對行動裝置的功能
  mobileCheck: function () {},
  mobileDeceleration: 0.004,

  //畫面一開始，元素的初始值set：物件上第一個影格的值，ease：相對畫面開始的Scrolltop值使用兩格影格作參考，reset:使用他原生的CSS值
  //edgeStrategy:'set'，

  //render事件
  render: function (data) {
    //Log the current scroll position.
    console.log(data.curTop);
  }
});

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
