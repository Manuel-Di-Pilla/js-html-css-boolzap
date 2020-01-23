$('.list li').click(
  function () {
    if ($(this).hasClass('click-background') == false) {
      $('.list li').removeClass('click-background')
      $(this).addClass('click-background');
    }
  }
)
