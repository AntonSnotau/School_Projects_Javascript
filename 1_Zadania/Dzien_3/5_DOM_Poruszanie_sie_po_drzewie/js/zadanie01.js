/**
 * Created by Jacek on 2016-01-12.
 */
 document.addEventListener('DOMContentLoaded', function(e) {

   var button = document.querySelectorAll('.button');
   for (var i = 0; i < button.length; i++) {

     button[i].addEventListener("click", function (){
       this.nextElementSibling.classList.toggle('hidden');
     });
 });
