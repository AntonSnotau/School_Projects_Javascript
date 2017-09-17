/**
 * Created by Jacek on 2016-01-12.
 */
 document.addEventListener("DOMContentLoaded", function(){

   var h = document.querySelector('#windowHeight');
   var w = document.querySelector('#windowWidth')

   window.addEventListener("resize", function() {
     h.innerText = this.innerHeight;
     w.innerText = this.innerWidth;
   });

 });
