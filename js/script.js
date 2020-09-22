
 // faq アコ－ディオン
$(function(){

    $('.faq__q').hide();
    
    $( '.syncer-acdn' ).click( function(){

        // [data-target]の属性値を代入する
        var target = $(this).data( 'target' );

        // [target]と同じ名前のIDを持つ要素に[slideToggle()]を実行する
        $( '#' + target ).slideToggle(300);
    });
}); // faq アコ－ディオン




// swiper 制作実績
 var mySwiper = new Swiper('.swiper-container', {

  loop: true,　// ループ処理
  slidesPerView: 'auto',　// ※※※重要　無限ループ※※※ （''内をautoにすると1番目から始まる。）
  centeredSlides : true,
  

	autoplay: {　　// 自動再生
		delay: 5000,　// 5秒
		stopOnLastSlide: false,
		disableOnInteraction: false,
		reverseDirection: false
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	}
}); // swiper 制作実績


// 必須を入力しないと送信ボタン押せないようにする記述
$(document).ready(function () {

    const $submitBtn = $('#js-submit')
    $('#form input,#form textarea').on('change', function () {
      if (
        $('#form input[type="text"]').val() !== "" &&
        $('#form input[type="mail"]').val() !== "" &&
        $('#form input[type="checkbox"]').val() !== "" &&
        $('#form #privacyCheck').prop('checked') === true
      ) {
        $submitBtn.prop('disabled', false);
  
      } else {
        $submitBtn.prop('disabled', true);
      }
    });
  });// 必須を入力しないと送信ボタン押せないようにする記述



  // ハンバーガーメニュー
$('.burger-btn').on('click',function(){
  $('.header__nav').fadeToggle(300);
  $(this).toggleClass('cross');
  // $('body').toggleClass('noscroll');

});// ハンバーガーメニュー



// スムーススクロール
$(function(){
  $("a[href^='#']").click(function() {
  // #で始まるアンカーをクリックした場合に処理

      
     var speed = 500; // ミリ秒
     // スクロールスピード

     var href= $(this).attr("href");
     // アンカーの値を取得

     var target = $(href == "#" || href == "" ? 'html' : href);
     // 移動先取得

     var position = target.offset().top + -50;　/*上に-100ずらしている*/
     // 移動先を数値で取得

     $('body,html').animate({scrollTop:position}, speed, 'swing');
     // スムーススクロール実行

     return false;
  });
});　// スムーススクロール


// スムースするとふわっと
$(function(){
  $(window).scroll(function (){
      $('.fadein').each(function(){
          var targetElement = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > targetElement - windowHeight + 200){
              $(this).css('opacity','1');
              $(this).css('transform','translateY(0)');
          }
      });
  });
});　// スムースするとふわっと



// formの送信後の画面、まだわからないので未完成
  $(document).ready(function () {

    $('#form').submit(function (event) {
      var formData = $('#form').serialize();
      $.ajax({
        url: "https://docs.google.com/forms/d/e/1FAIpQLSfLaf5zq69oy9VCnfrrgFGLnhYC4nWZG_vSC7OvJPYIUoxRaw/viewform?usp=sf_link",
        data: formData,
        type: "POST",
        dataType: "xml",
        statusCode: {
          0: function () {
            $(".end-message").slideDown();
            $(".submit-btn").fadeOut();
            //window.location.href = "thanks.html";
          },
          200: function () {
            $(".false-message").slideDown();
          }
        }
      });
      event.preventDefault();
    });

  });