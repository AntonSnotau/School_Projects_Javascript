/**
 * Created by Jacek on 2015-12-16.
 */

document.addEventListener("DOMContentLoaded", function(){
    var prevButton = document.getElementById("prevPicture");
    var nextButton = document.getElementById("nextPicture");
    var pictures = document.querySelectorAll(".slider li");
    var currentPicture = 0;

    //pictures[currentPicture].style.display = "inline-block";
    pictures[currentPicture].classList.add("visible");

    nextButton.addEventListener("click", function(event){
        pictures[currentPicture].classList.remove("visible");
        currentPicture++;
        if(currentPicture >= pictures.length){
            currentPicture = 0;
        }
        pictures[currentPicture].classList.add("visible");
    });

    prevButton.addEventListener("click", function(event){
        pictures[currentPicture].classList.remove("visible");
        currentPicture--;
        if(currentPicture < 0){
            currentPicture = pictures.length - 1;
        }
        pictures[currentPicture].classList.add("visible");
    });
});