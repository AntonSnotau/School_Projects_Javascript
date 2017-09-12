//1//
function getNumber(n, tab) {
  var r = 0;
  for (var i = 0; i < tab.length; i++) {
    if (n == tab[i]) {
      console.log("Yes! " + n + " is in the table");
    }
  }
}
getNumber(3, [5, 6, 7, 9, 3]);

//2//
function createIdentityMatrix(x, y) {
  var tab = [];
  var tabrow = [];
  for (var i = 0; i < y; i++) {
  for (var j = 0; j < x; j++) {
    if (i == j) {
      tabrow.push(1);
    }
    else if (i =! j) {
      tabrow.push(0);
    }
  }
  tab.push(tabrow);
  }
  return tab;
}
console.table(createIdentityMatrix(10, 10));

//3//
