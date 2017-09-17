/**
 * Created by Jacek on 2016-01-12.
 */
 document.addEventListener("DOMContentLoaded", function(){

   var globalX = document.querySelector('#globalX');
   var globalY = document.querySelector('#globalY');
   var localX = document.querySelector('#localX');
   var localY = document.querySelector('#localY');

   var box = document.querySelector('.box');

   box.addEventListener("mousemove", function(e) {
     globalX.innerText = e.pageX;
     globalY.innerText = e.pageY;
     localX.innerText = e.offsetX;
     localY.innerText = e.offsetY;
   });


 });
