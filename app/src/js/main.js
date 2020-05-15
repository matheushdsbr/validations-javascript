$(function() {
  function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  //$(".email").on('blur', function() {
  //  console.log(validateEmail($(this).val()));
  //});
  $("form").submit(function(e) {
    e.preventDefault();
    if (validateEmail($(this).find($(".email")).val())) {
      $(this).find($(".email")).removeAttr("style");
      console.log("Enviou..");
    } else {
      $(this).find($(".email")).css("border", "1px solid red");
      console.log("Não enviou");
    }
  });
});