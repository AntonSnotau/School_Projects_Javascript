/**
 * Created by Jacek on 2016-01-12.
 */
 document.addEventListener("DOMContentLoaded", function(){

   var form = document.querySelector('form');

 form.addEventListener('submit', function(e) {
   // body...


   //Zapobiegam wysłaniu formularza automatycznie
   e.preventDefault();


   //Pobieram wartości inputów
   var email = document.querySelector('#email').value;
   var name = document.querySelector('#name').value;
   var surname = document.querySelector('#surname').value;
   var pass1 = document.querySelector('#pass1').value;
   var pass2 = document.querySelector('#pass2').value;
   var agree = document.querySelector('#agree').checked;


   //Pobiertanie referencji do informacji o sukcesie albo błędach
   var errorMessage = document.querySelector('.error-message');
   var successMessage = document.querySelector('.success-message');
   errorMessage.innerText = "";
   successMessage.innerText = "";

   //Zmienna przetrzymuje informacje o tym, ćzy wszsytko gra i czy fromularz może zostac wysłany
   var isValid = true;


   //Walidacja
   if(email.indexOf("@") === -1)
   {
      var p = document.createElement('p');
      p.innerText = "Napisz poprawnie maila koleżko";
      errorMessage.appendChild(p);
      isValid = false;
   }

   if(name.length < 6)
   {
      var p = document.createElement('p');
      p.innerText = "Twoje imie to nawet nie jest imie";
      errorMessage.appendChild(p);
      isValid = false;
   }

   if(surname.length < 6)
   {
      var p = document.createElement('p');
      p.innerText = "To nawet nie jest nazwisko";
      errorMessage.appendChild(p);
      isValid = false;
   }

   if(pass1 !== pass2 || pass1.length < 3)
   {
      var p = document.createElement('p');
      p.innerText = "Napisz hasła właściwie kolego";
      errorMessage.appendChild(p);
      isValid = false;
   }

   if(!agree)
   {
      var p = document.createElement('p');
      p.innerText = "Musisz się zgodzi";
      errorMessage.appendChild(p);
      isValid = false;
   }


   //Jeżeli isValid jest ustawiony na true - wyślij formularz
   if(isValid){
     successMessage.innerText = "Sukcesssss";

    // .. po 3 sekundach żeby zobaczyc info o sukcesie
     setTimeout(function(){
       form.submit();
     }, 3000);

   }

 });


  //  var from = document.querySelector('form');
   //
  //  from.addEventListener('submit', function(e) {
  //    e.preventDefault();
  //    var mail = document.querySelector('#email').value;
  //    var name = document.querySelector('#name').value;
  //    var surname = document.querySelector('#surname').value;
  //    var pass1 = document.querySelector('#pass1').value;
  //    var pass2 = document.querySelector('#pass2').value;
  //    var agree = document.querySelector('#agree').checked;
   //
  //    var errorMessage = document.querySelector('.error-message');
  //    errorMessage.innerText = "";
  //    var successMessage = document.querySelector('.success-message');
  //    successMessage.innerText = "";
   //
  //    var isValid = true;
   //
  //    if (email.indexOf('@') === -1) { //skomplikowana rzecz, -1 znaczy, że elementu nie ma, 0, że on pierwszy
  //         var p = document.createElement('p');
  //         p.innerText = "Proszę, wypisz poprawnego maila";
  //         errorMessage.appendChild(p);
  //         isValid = false;
  //    }
  //    if (name.length < 6) {
  //         var p = document.createElement('p');
  //         p.innerText = "Proszę, wypisz poprawne imię";
  //         errorMessage.appendChild(p);
  //         isValid = false;
  //    }
  //    if (surname.length < 6) {
  //         var p = document.createElement('p');
  //         p.innerText = "Proszę, wypisz poprawne nazwisko";
  //         errorMessage.appendChild(p);
  //         isValid = false;
  //    }
  //    if (pass1 !== pass2 || pass.length < 2) {
  //         var p = document.createElement('p');
  //         p.innerText = "Problem w polu Hasło";
  //         errorMessage.appendChild(p);
  //         isValid = false;
  //    }
  //    if (!agree) {
  //         var p = document.createElement('p');
  //         p.innerText = "Proszę, zatwierdź warunki";
  //         errorMessage.appendChild(p);
  //         isValid = false;
  //    }
  //    if (isValid == true) {
  //      successMessage.innerText = "Fajnie!"
  //      setTimeout (function(){
  //        form.submit();
  //      }, 2000);
  //    }
  //  })
 });
