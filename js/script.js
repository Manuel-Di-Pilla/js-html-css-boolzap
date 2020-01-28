$(document).ready(
  function () {
    $('.send i').click(
      function () {
        sendMessage();
      }
    );
    $('.input-text').keydown(
      function () {
        if (event.keyCode == 13) {
          sendMessage();
        }
      }
    );
    $('.input-search input').keyup(
      function () {
        searchContact();
      }
    );
    $('.contact-chat').click(
      function () {
        var contattoLista = $(this).attr('data-contatto');
        var contattoChat = $('.right-side[data-contact = "'+ contattoLista +'"]');
        $('.right-side').removeClass('active');
        contattoChat.addClass('active');
      }
    );
    $(document).on('click', '.icon-arrow', function () {
      $(this).children().toggleClass('active');
    })
    $(document).on('click', '.delete', function () {
      $(this).parents('.my-message').remove();
    })
    $(document).on('click', '.delete', function () {
      $(this).parents('.his-message').remove();
    })

    $('.input-text').focus(function() {
      $('.fa-microphone').removeClass('fa-microphone').addClass('fa-paper-plane');
    }).blur(function () {
      $('.fa-paper-plane').removeClass('fa-paper-plane').addClass('fa-microphone');
    })
  }
)

function sendMessage() {
  var message = $('.right-side.active .input-text').val();
  if (message.length != 0) {
    var newMessage = $('.template .my-message').clone();
    newMessage.find('.text-message p').text(message);
    $('.right-side.active .chat').append(newMessage);
    $('.right-side.active .input-text').val('');
    setTimeout(function () {
      var newMessage = $('.template .his-message').clone();
      newMessage.find('.text-message p').text('ok');
      $('.right-side.active .chat').append(newMessage);
      $('.right-side.active .chat')[0].scrollTop = $('.right-side.active .chat')[0].scrollHeight;
    }, 1000);
    $('.right-side.active .chat')[0].scrollTop = $('.right-side.active .chat')[0].scrollHeight;
  }
}
function searchContact() {
  var inputSearch = $('.input-search input').val();
  var name;
  for (var i = 0; i < $(".contact-chat").length; i++) {
    name = $(".contact-chat").eq(i).find('.info-cantact-chat h4').text().toLowerCase();
    if (name.includes(inputSearch)) {
     $(".contact-chat").eq(i).show();
    } else {
     $(".contact-chat").eq(i).hide();
    }
  }
}
