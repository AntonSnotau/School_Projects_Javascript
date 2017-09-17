/**
 * Created by Jacek on 2015-12-16.
 */
 document.addEventListener("DOMContentLoaded", function(){

   var img = document.querySelectorAll('#gallery img');
   var hide = document.querySelector('#hideButton');
   var show = document.querySelector('#showButton');

   show.addEventListener('click', function(){
     var input = document.querySelector('#tagInput').value;
     for (var i = 0; i < img.length; i++) {
       var data = img[i].getAttribute('data-tag');
       data = data.split(',');

       if (data.indexOf(input)>-1) {
         img[i].classList.remove('invisible');
       }
       else {
         img[i].classList.add('invisible');
       }
     }
   });

     hide.addEventListener('click', function(){
       var input = document.querySelector('#tagInput').value;
       for (var i = 0; i < img.length; i++) {
         var data = img[i].getAttribute('data-tag');
         data = data.split(',');

         if (data.indexOf(input)>-1) {
           img[i].classList.add('invisible');
         }
         else {
           img[i].classList.remove('invisible');
         }
       }
   });

});
