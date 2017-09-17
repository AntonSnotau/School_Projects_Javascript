/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function(){
    /*
    Poniżej napisz kod rozwiązujący zadania
     */

// var lis = document.querySelectorAll(".ex5 ul li");
// for (var i = 0; i < lis.length; i++) {
// if(!lis[i].hasAttribute('data-direction'))
//  {
// lis[i].setAttribute("data-direction", "up");
//  }
// }
// if(i % 2 != 0) {
//   lis[i].style.backgroundColor = "green";
// }
//
// if(i % 3 == 0)
// {
//   lis[i].querySelector('a').style.color = "orange";
// }
// }
//
// lis[4].classList.add('big');
// lis[4].className = "big";

//1//

var ex1 = document.querySelector(".exercise.ex1");
console.log(ex1);
var chrome = ex1.querySelector("div");
console.log(chrome);
chrome.querySelector("a").innerText = "Chrome";
chrome.querySelector(".chrome").style.width = "100px";

var edge = ex1.querySelectorAll("div")[2];
console.log(edge);
edge.querySelector('.edge').style.backgroundImage = "url('assets/img/edge.png')";
edge.querySelector('a').setAttribute("href", "https://www.microsoft.com/pl-pl/windows/microsoft-edge");

var firefox = document.querySelector('.firefox');
firefox.style.backgroundImage = "url('assets/img/firefox.png')";
document.querySelector('.firefox + a').innerText = "Firefox";
document.querySelector('.firefox + a').setAttribute("href", "https://www.mozilla.org/pl/firefox/new/?utm_source=google&utm_medium=cpc&utm_campaign=Firefox-Brand-PL-TS-GGL-Exact&utm_term=firefox&utm_content=A144_A203_A006327&gclid=EAIaIQobChMI-PGRpuuh1gIVFhMbCh1yVQBcEAAYASAAEgL6kfD_BwE&gclsrc=aw.ds");

//2//

var name = document.querySelector('#name');
name.innerText = "Anton Snotau";
var color = document.querySelector('#fav_color');
color.innerText = "Blue";
var meal = document.querySelector('#fav_meal');
meal.innerText = "Sushi";

//3//

var menu = document.querySelector('.exercise.ex3 ul');
menu.classList.add('menu');
var li = menu.querySelectorAll('li');
for (var i = 0; i < li.length; i++) {
  li[i].classList.add('menuElement');
}
for (var i = 0; i < li.length; i++) {
  if (li[i]) {

  }
  li[i].classList.remove('error');
}

//4//

var ex4 = document.querySelectorAll('.ex4 li');
for (var i = 0; i < ex4.length; i++) {
  var a = i + 1;
  ex4[i].setAttribute("li", "data-id= " + a);0
}

});
