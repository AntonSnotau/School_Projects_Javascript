document.addEventListener("DOMContentLoaded", function(){

  var button = document.querySelector('button');
  var form = document.querySelector('form');
  var checkbox = document.querySelectorAll('input');
  var total = document.querySelector('#price');
  var sum = 0;
  var fin = document.querySelector('#fin');

form.addEventListener('submit', function(e) {
  e.preventDefault();
});

  for (var i = 1; i < checkbox.length - 1; i++) {
    checkbox[i].addEventListener('change', function(){
      var price = this.getAttribute('data-price');
      var pricenum = parseFloat(price);
      if (this.checked) {
          sum = sum + pricenum;
          total.innerText = sum + " zł";
      }
      if (this.checked == false) {
          sum = sum - pricenum;
          total.innerText = sum + " zl"
      }
  });
 }
  checkbox[0].addEventListener('change', function(){
    for (var i = 1; i < checkbox.length - 1; i++) {
      if (this.checked) {
        checkbox[i].checked = true;
        sum = 18.30;
        total.innerText = sum + " zł";
      }
      else {
        checkbox[i].checked = false;
        sum = 0;
        total.innerText = sum + " zł";
      }
    }
  });

  checkbox[6].addEventListener('change', function(){
    for (var i = 0; i < checkbox.length; i++) {
      if (this.checked) {
        checkbox[i].checked = false;
        sum = 0;
        total.innerText = sum + " zł";
        fin.innerText = "";
      }
    }
  });

  button.addEventListener('click', function(){
    fin.innerText = "Do zapłaty: " + sum + " zł";
    // form.submit();
  })
});

//zrobiłem, wysylanie formy zakomentowałem, żeby widzieć pole do zapłaty
// pytania:
//1. jak usunąć .00000000000001, przecież robi wszystkie matematyczne operacje przez JS popsutymi.
