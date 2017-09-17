/**
 * Created by Jacek on 2016-01-12.
 */
 document.addEventListener("DOMContentLoaded", function(){

   var buttons = document.querySelectorAll('button');
   var selector = ".counter";


   for (var i = 0; i < buttons.length; i++) {

     buttons[i].addEventListener("click", function(){

       var actual = document.querySelector(selector).innerText;
       var toChange = parseInt(actual) + 1;

       document.querySelector(selector).innerText = toChange;
     })
   }

 });
