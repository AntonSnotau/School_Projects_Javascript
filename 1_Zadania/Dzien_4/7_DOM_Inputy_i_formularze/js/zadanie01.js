/**
 * Created by Jacek on 2016-01-12.
 */
 document.addEventListener("DOMContentLoaded", function(){
console.log(1);
   var check = document.querySelector('#invoice');
   var block = document.querySelector('#invoiceData');
   document.querySelector('#invoiceData').style.display = 'none';

   check.addEventListener('change', function() {
     if (this.checked) {
      block.style.display = "block";
     }
     else {
       block.style.display = "none";
     }
   });
 });
