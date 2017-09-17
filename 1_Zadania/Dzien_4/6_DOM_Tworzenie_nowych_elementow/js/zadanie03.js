/**
 * Created by Jacek on 2016-01-12.
 */
 document.addEventListener("DOMContentLoaded", function(){
   var button = document.querySelector('#remove');
   button.addEventListener("click", function(){
     this.parentElement.removeChild(this);
   })

 });
