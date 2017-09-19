/**
 * Created by Jacek on 2015-12-16.
 */
 document.addEventListener("DOMContentLoaded", function(){

   var images = document.querySelectorAll('li');
   var fullScreen = document.querySelector('body');

   for (var i = 0; i < images.length; i++) {
     images[i].querySelector('img').addEventListener("click", function(){

       var imgSrc = this.getAttribute('src');
       var div = document.createElement('div');
       div.classList.add("fullScreen");
       var img = document.createElement('img');
       var button = document.createElement('button');
       button.classList.add("close");
       button.innerText = "Close";
       img.setAttribute('src', imgSrc);

       fullScreen.appendChild(div);
       div.appendChild(button);
       div.appendChild(img);

       button.addEventListener ('click', function(){
         fullScreen.removeChild(div);
       })
     });
   }



 });

/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */
