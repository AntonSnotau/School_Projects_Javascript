// function scene(role1, role2, play) {
//         return "Postacie to " + role1 + " i " + role2 + "Scena: " + play(role1, role2);
// }
// scene("Pablo Escobar", "Javier Pena", function(a1, a2) {
// });
// scene("Pablo Escobar", "Javier Pena", function(a1, a2) {
//
//         return a1 + "ZAbija" + a2;
// });
// scene("Pablo Escobar", "Lucy Moncada", function(a1, a2) {
//         return a1 + "ZAbija" + a2;
// });

//2//
function getMax() {
  var max = 0;
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
console.log(getMax(4, 5, 6, 11, 99, 0, 100, 0));

//3//
function countHello(num) {
  var counter = 1;
  var t = setInterval( function(){
    console.log("Hello " + counter);
    counter ++;
    if (counter > num) {
      clearInterval(t);
    }
  },
    10);
}
countHello(10);

//4//
cokolwiek();

function cokolwiek()
{
  console.log("Ok działam");
}

console.log(ok); //undefined

var ok = "Jest ok";

saySomething();

var saySomething = function(){
  console.log("Mówię coś");
}
