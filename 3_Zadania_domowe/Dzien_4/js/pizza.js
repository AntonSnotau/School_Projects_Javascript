document.addEventListener("DOMContentLoaded", function(){

  var button = document.querySelector('button');
  var form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
});

  var checkbox = document.querySelectorAll('input');
  var total = document.querySelector('#price');

  for (var i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener('change', function(){
      for (var i = 1; i < (checkbox.length - 1); i++) {
        if (checkbox[i].checked) {
          var price = checkbox[i].getAttribute('data-price');
          var priceChange = parseInt(price);
          total.innerText = total + price + " zł";
          console.log(total);
        }
      }
      if (checkbox[0].checked) {
        for (var i = 1; i < (checkbox.length - 1); i++) {
          var price = checkbox[i].getAttribute('data-price');
          var priceChange = parseInt(price);
          total = parseInt(total) + priceChange + " zł";
        }
      }
  });
}
});


  // if (checkbox[6].checked) {
  //   for (var i = 0; i < (checkbox.length - 1); i++) {
  //     checkbox[i].setAttribute = false;
  //   }
  // }




  //
  // //Pobieram wartości inputów
  // var email = document.querySelector('#email').value;
  // var name = document.querySelector('#name').value;
  // var surname = document.querySelector('#surname').value;
  // var pass1 = document.querySelector('#pass1').value;
  // var pass2 = document.querySelector('#pass2').value;
  // var agree = document.querySelector('#agree').checked;
  //
  //
  // //Pobiertanie referencji do informacji o sukcesie albo błędach
  // var errorMessage = document.querySelector('.error-message');
  // var successMessage = document.querySelector('.success-message');
  // errorMessage.innerText = "";
  // successMessage.innerText = "";
  //
  // //Zmienna przetrzymuje informacje o tym, ćzy wszsytko gra i czy fromularz może zostac wysłany
  // var isValid = true;
  //
  //
  // //Walidacja
  // if(email.indexOf("@") === -1)
  // {
  //    var p = document.createElement('p');
  //    p.innerText = "Napisz poprawnie maila koleżko";
  //    errorMessage.appendChild(p);
  //    isValid = false;
  // }
  //
  // if(name.length < 6)
  // {
  //    var p = document.createElement('p');
  //    p.innerText = "Twoje imie to nawet nie jest imie";
  //    errorMessage.appendChild(p);
  //    isValid = false;
  // }
  //
  // if(surname.length < 6)
  // {
  //    var p = document.createElement('p');
  //    p.innerText = "To nawet nie jest nazwisko";
  //    errorMessage.appendChild(p);
  //    isValid = false;
  // }
  //
  // if(pass1 !== pass2 || pass1.length < 3)
  // {
  //    var p = document.createElement('p');
  //    p.innerText = "Napisz hasła właściwie kolego";
  //    errorMessage.appendChild(p);
  //    isValid = false;
  // }
  //
  // if(!agree)
  // {
  //    var p = document.createElement('p');
  //    p.innerText = "Musisz się zgodzi";
  //    errorMessage.appendChild(p);
  //    isValid = false;
  // }
  //
  //
  // //Jeżeli isValid jest ustawiony na true - wyślij formularz
  // if(isValid){
  //   successMessage.innerText = "Sukcesssss";
  //
  //  // .. po 3 sekundach żeby zobaczyc info o sukcesie
  //   setTimeout(function(){
  //     form.submit();
  //   }, 3000);
  //
  //
  //
