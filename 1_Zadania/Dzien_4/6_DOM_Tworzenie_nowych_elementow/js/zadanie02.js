/**
 * Created by Jacek on 2016-01-12.
 */
 document.addEventListener("DOMContentLoaded", function(){
   var orid = document.querySelector('#orderId');
   var item = document.querySelector('#item');
   var quan = document.querySelector('#quantity');
   var but = document.querySelector('#addBtn');
   var table = document.querySelector('tbody')

   but.addEventListener("click", function(){
     var tr = document.createElement('tr');
     var td = document.createElement('td');
     var td2 = document.createElement('td');
     var td3 = document.createElement('td');
     table.appendChild(tr);
     tr.appendChild(td).innerText = quantity.value;
     tr.appendChild(td2).innerText = item.value;
     tr.appendChild(td3).innerText = orid.value;
   });

  //  var button = document.querySelector(".button");
  //  button.addEventListener("click", function(e) {
   //
  //    var a = document.querySelector("#orderId").value;
  //    var b = document.querySelector("#item").value;
  //    var c = document.querySelector("#quantity").value;
  //    var table = document.querySelector("table");
  //    var tr = table.querySelector("tr").cloneNode(true);
   //
  //    tr.firstElementChild.innerText = a;
  //    tr.children[1].innerText = b;
  //    tr.children[2].innerText = c;
   //
  //    table.appendChild(tr);
   //
  //  })

 });
