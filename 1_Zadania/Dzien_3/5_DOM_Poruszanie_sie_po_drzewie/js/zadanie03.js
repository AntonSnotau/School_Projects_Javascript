/**
 * Created by Jacek on 2016-01-12.
 */
 document.addEventListener('DOMContentLoaded', function(e) {

   var cont = document.querySelectorAll('.listContainer');

   for (var i = 0; i < cont.length; i++) {
     cont[i].addEventListener("mouseenter", function (e){
       var list = this.firstElementChild;
       list.firstElementChild.style.backgroundColor = "red";
       list.lastElementChild.style.backgroundColor = "blue";
       for (var i = 1; i < 4; i++) {
         list.children[i].style.backgroundColor = "green";
       }
     });
   }

 });
