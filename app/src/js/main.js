$(function() {
  function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  $('.cpf').mask('000.000.000-00');

  $("form").submit(function(e) {
    e.preventDefault();
    if (validateEmail($(this).find($(".email")).val())) {
     $(this).find($(".email")).removeAttr("style");
     $(this).find($(".span-email")).hide();
    } else {
      $(this).find($(".span-email")).show();
      $(this).find($(".span-email")).text("*Email Inválido!");
      $(this).find($(".span-email")).css("color", "red");
      $(this).find($(".email")).css("border", "1px solid red");
    }
  });
});