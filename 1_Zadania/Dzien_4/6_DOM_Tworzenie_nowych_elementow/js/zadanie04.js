/**
 * Created by Jacek on 2016-01-12.
 */
 document.addEventListener("DOMContentLoaded", function(){
   var button = document.querySelector('#remove');
   var list = document.querySelectorAll('.list');

   button.addEventListener("click", function(){
     for (var i = 0; i < list.length; i++) {
       this.parentElement.removeChild(list[i]);
     }
   });


     //lub
     // list.innerHTML = '';
 });
