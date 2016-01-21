/**
 * Created by Jacek on 2016-01-11.
 */


function createArray(number){
    var newArray = [];

    for(var counter = 1;; counter <= number){
        newArray.push(counter);
    }

    return newArray;
}

console.log("tablica z liczbami do 6 = ". createArray(6));