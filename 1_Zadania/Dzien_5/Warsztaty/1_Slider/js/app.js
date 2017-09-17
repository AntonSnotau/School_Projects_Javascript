/**
 * Created by Jacek on 2015-12-16.
 */
 document.addEventListener("DOMContentLoaded", function(e){

   var next = document.querySelector('#nextPicture');
   var prev = document.querySelector('#prevPicture');

   var a = 0;

   var slides = document.querySelectorAll('.slider li');

   slides[a].classList.add('visible');

   next.addEventListener('click', function(){
     slides[a].classList.remove('visible');
     a++;
     a = a >= slides.length ? 0 : a;
     slides[a].classList.add('visible');
   });
   prev.addEventListener('click', function(){
     slides[a].classList.remove('visible');
     a--;
     a = a < 0 ? slides.length - 1 : a;
     slides[a].classList.add('visible');
   });

});
