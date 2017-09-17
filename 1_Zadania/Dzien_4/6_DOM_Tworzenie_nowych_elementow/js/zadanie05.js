/**
 * Created by Jacek on 2016-01-12.
 */
 document.addEventListener("DOMContentLoaded", function(){
console.log('1');
   var btn = document.querySelectorAll('.moveBtn');
   for (var i = 0; i < btn.length; i++) {
     btn[i].addEventListener('click', function(){
       if (this.parentElement.parentElement.id == "list1") {
         document.querySelector('#list2').appendChild(this.parentElement);
       }
       else {
         document.querySelector('#list1').appendChild(this.parentElement);
       }
     });
   }
 });
