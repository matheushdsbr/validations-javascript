$(function() {
  function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g,'');
    console.log(cpf);
    if(cpf == '') return false;
    // Elimina CPFs invalidos conhecidos
    if (cpf.length != 11 ||
      cpf == "00000000000" ||
      cpf == "11111111111" ||
      cpf == "22222222222" ||
      cpf == "33333333333" ||
      cpf == "44444444444" ||
      cpf == "55555555555" ||
      cpf == "66666666666" ||
      cpf == "77777777777" ||
      cpf == "88888888888" ||
      cpf == "99999999999")
        return false;
    // Valida 1o digito
    add = 0;
    for (i=0; i < 9; i ++)
      add += parseInt(cpf.charAt(i)) * (10 - i);
      rev = 11 - (add % 11);
      if (rev == 10 || rev == 11)
        rev = 0;
      if (rev != parseInt(cpf.charAt(9)))
        return false;
    // Valida 2o digito
    add = 0;
    for (i = 0; i < 10; i ++)
      add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
      rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
      return false;
    return true;
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

    if (validarCPF($(this).find($(".cpf")).val())) {
      $(this).find($(".cpf")).removeAttr("style");
      $(this).find($(".span-cpf")).hide();
      console.log($(this).find($(".cpf")).val());
     } else {
       $(this).find($(".span-cpf")).show();
       $(this).find($(".span-cpf")).text("*CPF Inválido!");
       $(this).find($(".span-cpf")).css("color", "red");
       $(this).find($(".cpf")).css("border", "1px solid red");
       console.log($(this).find($(".cpf")).val());
     }
  });
});