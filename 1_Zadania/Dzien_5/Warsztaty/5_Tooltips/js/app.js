/**
 * Created by Jacek on 2015-12-16.
 */


/*
 <span class="tooltipText">Text tooltipa</span>
 */
 document.addEventListener("DOMContentLoaded", function(){
   var span = document.querySelectorAll('.tooltip');

   for (var i = 0; i < span.length; i++) {
     span[i].addEventListener("mouseenter", function() {
       var newspan = document.createElement('span');
       newspan.classList.add('tooltipText');
       newspan.innerText = this.dataset.text;
       this.appendChild(newspan);
     });
     span[i].addEventListener("mouseleave", function() {
       this.removeChild(this.lastElementChild);
     });
   }
 });
