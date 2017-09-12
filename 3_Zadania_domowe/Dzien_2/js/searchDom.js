//1//
var menu = document.getElementById("menu");
function getDatasInfo(menu) {
  var tab = [];
  var li = document.getElementById("menu").children;
  for (var i = 0; i < li.length; i++) {
    tab.push(li[i].dataset.info);
  }
  return tab;
}
console.log(getDatasInfo(menu));

//2//
var main = document.getElementById("main-contener");
function getElementClass(element) {
  var el = document.getElementById("main-contener").children;
  for (var i = 0; i < el.length; i++) {
    console.log(el[i].className);
  }
}
getElementClass(main);

//3//
var pink = document.querySelector(".pink-color");
function getElementText(element) {
  console.log(element.innerText);
}
getElementText(pink);

//4//
var img = document.querySelectorAll(".images");
function getElementAlt(element) {
  var tab = [];
  for (var i = 0; i <  element.length; i++) {
     console.log(element[i].alt);
  }
}
getElementAlt(img);

//5//
var link = document.querySelectorAll(".my-link");
function getElementHref(element) {
  var tab = [];
  for (var i = 0; i <  element.length; i++) {
     console.log(element[i].href);
  }
}
getElementHref(link);
