$(document).ready(
  function () {
    $('.send').click(
      function () {
        var text = $('.add-message').val();
        var newMessage = $('.template').clone();
        newMessage.addClass('text').addClass('me');
        var find = newMessage.find('p');
        find.text(text);
        $('.live-chat').append(newMessage);
      }
    )
  }
)


















$('.list li').click(
  function () {
    if ($(this).hasClass('click-background') == false) {
      $('.list li').removeClass('click-background')
      $(this).addClass('click-background');
    }
  }
)
