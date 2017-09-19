document.addEventListener("DOMContentLoaded", function(){

  var button = document.querySelector('button');
  var form = document.querySelector('form');
  var checkbox = document.querySelectorAll('input');
  var total = document.querySelector('#price');
  var sum = 0;

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
      var price = checkbox[i].getAttribute('data-price');
      var pricenum = parseFloat(price);
      sum = sum + pricenum;
      total.innerText = sum + " zł";
      checkbox[i].setAttribute('checked', '');
    }
  });

  checkbox[6].addEventListener('change', function(){
    for (var i = 1; i < checkbox.length - 1; i++) {
      checkbox[i].removeAttribute('checked');
      total.innerText = "0 zł";
    }
  });

  button.addEventListener('click', function(){

  })
});

//trudno
