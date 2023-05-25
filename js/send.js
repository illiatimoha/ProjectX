$(document).ready(function() {
  $('#continue_btn').click(function() {
      // собираем данные с формы
      var send = $('#u_send').val();
      var receive = $('#u_receive').val();
      var promo = $('#referral_code').val();
      var receive_address = $('#receive-address').val();
      var email = $('.exchange__block-input-email').val();
      var cr_send = document.getElementById("cr_send");
      var crSend = cr_send.innerText;
      var cr_receive = document.getElementById("cr_receive");
      var crReceive = cr_receive.innerText;
      
      console.log(send)
      console.log(receive)
      console.log(crSend)
      console.log(crReceive)
      console.log(receive_address)
      if (send !== "" && receive !== "" && crSend !== "" && crReceive !== "" && receive_address !== "" && email !== "") {
          $.ajax({
              url: "order.php", // куда отправляем
              type: "post", // метод передачи
              dataType: "json", // тип передачи данных
              data: { // что отправляем
                  "promo": promo,
                  "receive": receive,
                  "send": send,
                  "crSend": crSend,
                  "receive_address": receive_address,
                  "crReceive": crReceive,
                  "email": email

              },
              // после получения ответа сервера
              success: function(data) {
                  window.location.href = '/';
              },
              error: function(xhr, ajaxOptions, thrownerror) {
                  window.location.href = '../order/';

              }
          });
      } else {
          console.log("error")
      }



      // отправляем данные


  });
});