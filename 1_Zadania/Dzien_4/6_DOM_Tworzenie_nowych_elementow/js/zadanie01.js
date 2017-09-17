/**
 * Created by Jacek on 2016-01-12.
 */
 document.addEventListener("DOMContentLoaded", function(){

   var guz = document.querySelector('.button');
   var ul = document.querySelector('.menu');
   var counter = 1;

     guz.addEventListener("click", function(){
       var el = document.createElement('li');
       ul.appendChild(el);
       el.innerText += counter;
       counter++;
     });

 });
