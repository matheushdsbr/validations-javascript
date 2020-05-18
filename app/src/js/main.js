$(function() {
  function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g,'');
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

  function validarRG(rg){
    rg=rg.replace(/\D/g,"");
    if (rg.length != 7 ||
      rg == "0000000" ||
      rg == "1111111" ||
      rg == "2222222" ||
      rg == "3333333" ||
      rg == "4444444" ||
      rg == "5555555" ||
      rg == "6666666" ||
      rg == "7777777" ||
      rg == "8888888" ||
      rg == "9999999"){
        return false;
      }
      return rg;
    }

  function validarCEP(cep){
    cep=cep.replace(/\D/g,"");
    if (cep.length != 8 ||
      cep == "00000000" ||
      cep == "11111111" ||
      cep == "22222222" ||
      cep == "33333333" ||
      cep == "44444444" ||
      cep == "55555555" ||
      cep == "66666666" ||
      cep == "77777777" ||
      cep == "88888888" ||
      cep == "99999999") {
      return false;
    }
    return cep;
  }

  $('.cpf').mask('000.000.000-00');// 11 digitos
  $('.rg').mask('0.000.000');// 7 digitos
  $('.cep').mask('00000-000');// 8 digitos

  $("form").submit(function(e) {
    e.preventDefault();
    if (validateEmail($(this).find($(".email")).val())) {
     $(this).find($(".email")).removeAttr("style");
     $(this).find($(".span-email")).hide();
     console.log($(this).find($(".email")).val());
    } else {
      $(this).find($(".span-email")).show();
      $(this).find($(".span-email")).text("*Email Inválido!");
      $(this).find($(".span-email")).css("color", "red");
      $(this).find($(".email")).css("border", "1px solid red");
      console.log($(this).find($(".email")).val());
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

     if (validarRG($(this).find($(".rg")).val())) {
      $(this).find($(".rg")).removeAttr("style");
      $(this).find($(".span-rg")).hide();
      console.log($(this).find($(".rg")).val());
     } else {
       $(this).find($(".span-rg")).show();
       $(this).find($(".span-rg")).text("*RG Inválido!");
       $(this).find($(".span-rg")).css("color", "red");
       $(this).find($(".rg")).css("border", "1px solid red");
       console.log($(this).find($(".rg")).val());
     }

     if (validarCEP($(this).find($(".cep")).val())) {
      $(this).find($(".cep")).removeAttr("style");
      $(this).find($(".span-cep")).hide();
      console.log($(this).find($(".cep")).val());
     } else {
       $(this).find($(".span-cep")).show();
       $(this).find($(".span-cep")).text("*CEP Inválido!");
       $(this).find($(".span-cep")).css("color", "red");
       $(this).find($(".cep")).css("border", "1px solid red");
       console.log($(this).find($(".cep")).val());
     }
  });
});