/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function(){
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */

     function getDatasInfo(elements) {
       var tab = [];
       for (var i = 0; i < elements.length; i++) {
         tab.push(elements[i].dataset.color)
       }
       console.log(tab);
       return tab;
     }

     getDatasInfo(links);

//1//

// console.log(homeElement);
// console.log(typeof homeElement);
// console.log(homeElement.tagName);
// console.log(homeElement.className);
//
// console.log(childElements);
// console.log(typeof childElements);
// console.log(childElements.tagName);
// console.log(childElements.className);
//
// console.log(banner);
// console.log(typeof banner);
// console.log(banner.tagName);
// console.log(banner.className);
//
// console.log(blocks);
// console.log(typeof blocks);
// console.log(blocks.tagName);
// console.log(blocks.className);
//
// console.log(links);
// console.log(typeof links);
// console.log(links.tagName);
// console.log(links.className);

console.log(homeElement, childElements, banner, blocks, links);

for (var i = 0; i < childElements.length; i++) {
  console.log(childElements[i].tagName);
  console.log(childElements[i].className);
}

for (var i = 0; i < blocks.length; i++) {
  console.log(blocks[i].tagName);
  console.log(blocks[i].className);
}
for (var i = 0; i < links.length; i++) {
  console.log(links[i].tagName);
  console.log(links[i].className);
}


});
