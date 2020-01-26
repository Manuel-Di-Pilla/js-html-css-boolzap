$(document).ready(
  function () {
    $('.send i').click(
      function () {
        sendMessage();
      }
    );
    $(document).keydown(
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
        $('.contact-chat').removeClass('selected');
        $(this).addClass('selected');
        chat();
      }
    );
    $('.icon-arrow').click(
      function () {
        $(this).children(['div']).addClass('show');
        $(document).dblclick(
          function () {
            $('.delete-message').removeClass('show')
          }
        );
      }
    );
  }
)

function sendMessage() {
  var message = $('.input-text').val();
  var message2 = $('.input-text2').val();
  var message3 = $('.input-text3').val();
  var message4 = $('.input-text4').val();
  var message5 = $('.input-text5').val();
  var message6 = $('.input-text6').val();
  var message7 = $('.input-text7').val();
  var message8 = $('.input-text8').val();
  if (message.length != 0 && $('#michele').hasClass('active') == true) {
    var newMessage = $('.template .message').clone();
    newMessage.find('.text-message p').text(message);
    $('#first').append(newMessage);
    $('.input-text').val('');
    setTimeout(function () {
      var newMessage = $('.template .reply').clone();
      newMessage.find('.text-message p').text('ok');
      $('#first').append(newMessage);
      $('#first')[0].scrollTop = $('#first')[0].scrollHeight;
    }, 1000);
    $('#first')[0].scrollTop = $('#first')[0].scrollHeight;
  }
  else if (message2.length != 0 && $('#fabio').hasClass('active') == true) {
    var newMessage = $('.template .message').clone();
    newMessage.find('.text-message p').text(message2);
    $('#second').append(newMessage);
    $('.input-text2').val('');
    setTimeout(function () {
      var newMessage = $('.template .reply').clone();
      newMessage.find('.text-message p').text('ok');
      $('#second').append(newMessage);
      $('#second')[0].scrollTop = $('#second')[0].scrollHeight;
    }, 1000);
    $('#second')[0].scrollTop = $('#second')[0].scrollHeight;
  }
  else if (message3.length != 0 && $('#samuele').hasClass('active') == true) {
    var newMessage = $('.template .message').clone();
    newMessage.find('.text-message p').text(message3);
    $('#third').append(newMessage);
    $('.input-text3').val('');
    setTimeout(function () {
      var newMessage = $('.template .reply').clone();
      newMessage.find('.text-message p').text('ok');
      $('#third').append(newMessage);
      $('#third')[0].scrollTop = $('#third')[0].scrollHeight;
    }, 1000);
    $('#third')[0].scrollTop = $('#third')[0].scrollHeight;
  }
  else if (message4.length != 0 && $('#alessandrob').hasClass('active') == true) {
    var newMessage = $('.template .message').clone();
    newMessage.find('.text-message p').text(message4);
    $('#four').append(newMessage);
    $('.input-text4').val('');
    setTimeout(function () {
      var newMessage = $('.template .reply').clone();
      newMessage.find('.text-message p').text('ok');
      $('#four').append(newMessage);
      $('#four')[0].scrollTop = $('#four')[0].scrollHeight;
    }, 1000);
    $('#four')[0].scrollTop = $('#four')[0].scrollHeight;
  }
  else if (message5.length != 0 && $('#alessandroi').hasClass('active') == true) {
    var newMessage = $('.template .message').clone();
    newMessage.find('.text-message p').text(message5);
    $('#five').append(newMessage);
    $('.input-text5').val('');
    setTimeout(function () {
      var newMessage = $('.template .reply').clone();
      newMessage.find('.text-message p').text('ok');
      $('#five').append(newMessage);
      $('#five')[0].scrollTop = $('#five')[0].scrollHeight;
    }, 1000);
    $('#five')[0].scrollTop = $('#five')[0].scrollHeight;
  }
  else if (message6.length != 0 && $('#claudia').hasClass('active') == true) {
    var newMessage = $('.template .message').clone();
    newMessage.find('.text-message p').text(message6);
    $('#six').append(newMessage);
    $('.input-text6').val('');
    setTimeout(function () {
      var newMessage = $('.template .reply').clone();
      newMessage.find('.text-message p').text('ok');
      $('#six').append(newMessage);
      $('#six')[0].scrollTop = $('#six')[0].scrollHeight;
    }, 1000);
    $('#six')[0].scrollTop = $('#six')[0].scrollHeight;
  }
  else if (message7.length != 0 && $('#davide').hasClass('active') == true) {
    var newMessage = $('.template .message').clone();
    newMessage.find('.text-message p').text(message7);
    $('#seven').append(newMessage);
    $('.input-text7').val('');
    setTimeout(function () {
      var newMessage = $('.template .reply').clone();
      newMessage.find('.text-message p').text('ok');
      $('#seven').append(newMessage);
      $('#seven')[0].scrollTop = $('#seven')[0].scrollHeight;
    }, 1000);
    $('#seven')[0].scrollTop = $('#seven')[0].scrollHeight;
  }
  else if (message8.length != 0 && $('#federico').hasClass('active') == true) {
    var newMessage = $('.template .message').clone();
    newMessage.find('.text-message p').text(message8);
    $('#eight').append(newMessage);
    $('.input-text8').val('');
    setTimeout(function () {
      var newMessage = $('.template .reply').clone();
      newMessage.find('.text-message p').text('ok');
      $('#eight').append(newMessage);
      $('#eight')[0].scrollTop = $('#eight')[0].scrollHeight;
    }, 1000);
    $('#eight')[0].scrollTop = $('#eight')[0].scrollHeight;
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
function chat() {
  var selected = $('.selected');
  if (selected.hasClass('data1')) {
    $('.right-side').removeClass('active');
    $('#michele').addClass('active');
  } else if (selected.hasClass('data2')) {
    $('.right-side').removeClass('active');
    $('#fabio').addClass('active');
  } else if (selected.hasClass('data3')) {
    $('.right-side').removeClass('active');
    $('#samuele').addClass('active');
  } else if (selected.hasClass('data4')) {
    $('.right-side').removeClass('active');
    $('#alessandrob').addClass('active');
  } else if (selected.hasClass('data5')) {
    $('.right-side').removeClass('active');
    $('#alessandroi').addClass('active');
  } else if (selected.hasClass('data6')) {
    $('.right-side').removeClass('active');
    $('#claudia').addClass('active');
  } else if (selected.hasClass('data7')) {
    $('.right-side').removeClass('active');
    $('#davide').addClass('active');
  } else if (selected.hasClass('data8')) {
    $('.right-side').removeClass('active');
    $('#federico').addClass('active');
  }
}
