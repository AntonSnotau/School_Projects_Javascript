//wyk//
var arr = [
[11, 12],
[42, 2],
[-4, -120],
[0, 0],
[1, 34],
];

function checkArray(arr)
{
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    var trueorfalse = true;
    for (var j = 0; j < arr[i].length; j++) {
      if(arr[i][j] % 2 != 0)
      {
        trueorfalse = false;
      }
    }
    newArr.push(trueorfalse);

  }
  console.log(newArr);
  return newArr;
}
checkArray(arr);

//1//
var task1Array = [
                  [2, 3],
                  ["Ala", "Ola"],
                  [true, false],
                  [5, 6, 7, 8],
                  [12, 15, 67]
              ];
console.log(task1Array[3][2]);
console.log(task1Array[2].length);
console.log(task1Array[4][2]);

//2//
var task2Array = [
                  [1, 2, 3, 4],
                  [5, 6, 7, 8],
                  [9, 10, 11, 12]
            ];

for (var i = 0; i < task2Array.length; i++) {
  console.log(task2Array[i]);
}
for (var i = 0; i < task2Array.length; i++) {
  console.log(task2Array[i].length);
}
for (var i = 0; i < task2Array.length; i++) {
  for (var j = 0; j < task2Array[i].length; j++) {
    console.log(task2Array[i][j]);
  }
}
//3,4//
function print2DArray(tab2d) {
  for (var i = 0; i < tab2d.length; i++) {
    for (var j = 0; j < tab2d[i].length; j++) {
      console.log(tab2d[i][j]);
    }
  }
}
var task3Array = [
                  [1, 2, 3, 4],
                  [5, 6, 7, 8],
                  [9, 10, 11, 12, 13]
            ];
print2DArray(task3Array);
//5//
function create2DArray(a,b) {
  var newtab = [];
  var el = 0;
  for (var i = 0; i < a; i++) {
    var tab = [];
    for (var j = 0; j < b; j++) {
      el = Math.floor(Math.random()*10);
      tab.push(el);
    }
    newtab.push(tab);
  }
  return newtab;
}
console.table(create2DArray(4,8));
