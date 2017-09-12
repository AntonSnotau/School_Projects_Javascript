/**
 * Created by Jacek on 2016-01-11.
 */
document.addEventListener("DOMContentLoaded", function() {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */

var title = document.querySelector(".title");
function getDataAnimation(element) {
  console.log(element.dataset.animation);
}
getDataAnimation(title);

});

//1//
var home1 = document.querySelector("#home");
var home2 = document.getElementById("home");
console.log(home1, home2);

var li = document.querySelector('li:not([data-direction])');
console.log(li);

var block = document.querySelector('.block');
console.log(block);

//2//

var litag = document.querySelectorAll('nav li');
console.log(litag);

var pdiv = document.querySelectorAll('div p');
console.log(pdiv);

var divart = document.querySelector('article div');
console.log(divart);

//3//

var tag = document.querySelector('article.first');
console.log(tag);

var tag2 = tag.querySelectorAll('h2');
console.log(tag2.length);

var tag3 = tag.querySelectorAll('.oferts');
for (var i = 0; i < tag3.length; i++) {
  console.log(tag3[i]);
}

var tag4 = tag.querySelectorAll('div');
for (var i = 0; i < tag4.length; i++) {
  console.log(tag4[i].tagName);
}
