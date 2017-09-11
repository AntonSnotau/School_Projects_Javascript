function distFromAvarage (array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  var avarage = sum / array.length;
  var tab = [];
  for (var i = 0; i < array.length; i++) {
    tab.push(Math.abs(array[i] - avarage));
  }
  return tab;
}
console.log(distFromAvarage([4,5,7,3,7,3]));

//1//
var owoc = ["banan", "pinapple", "truskawka"];
console.log(owoc[0]);
console.log(owoc[owoc.length - 1]);
for (var i = 0; i < owoc.length; i++) {
  console.log(owoc[i]);
}
//2//
//done//
//3//
function printTable(tab) {
  for (var i = 0; i < tab.length; i++) {
    console.log(tab[i]);
  }
}
printTable([0, 1, 2, 3, 5, 6, 9]);
//4//
function multiply(array) {
  var rez = 1;
  for (var i = 0; i < array.length; i++) {
    rez = rez * array[i];
  }
  return rez;
}
console.log(multiply([2, 3, 4, 5]));
//5//
function getEvenAvarage(array) {
  var sum = 0;
  var len = 0;
  var av = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      sum += array[i];
      len = len + 1;
    }
    }
    av = sum / len;
    if (av == 0) {
      console.log("null");
    }
    else {
      console.log(av);
    }
}
getEvenAvarage([2, 4, 5, 6, 7, 7])
//6//
function sortArray(array) {
    array.sort(function (a, b) {
      return a - b;
    });
    return array;
  }
console.log(sortArray([3, 99, 100, 520, 1, 0, 3, 4]));
//7//
function addArrays(tab1, tab2) {
  var lngt = tab1.length > tab2.length ? tab1.length : tab2.length;
  var al = 0;
  var newtab = [];
  for (var i = 0; i < lngt; i++) {
    if (tab1[i] == null) {
      al = tab2[i];
    }
    else if (tab2[i] == null) {
      al = tab1[i];
    }
    else {
      al = tab1[i] + tab2[i];
    }
    newtab.push(al);
  }
  return newtab;
}
console.log(addArrays([4, 1, 1, 1, 5], [3, 2, 1, 1, 0, 0]));
