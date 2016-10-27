document.addEventListener("DOMContentLoaded", function() {
    var a = document.querySelectorAll(".parent");
    // var b = document.getElementById("b");

    // Tutaj this wskazuje na obiekt document (Ponieważ kontext wywołania funkcji
    // addEventListener to właśnie document)
    // console.log("obiekt document: ", this);
    for(var i = 0 ; i < a.length; i++) {
        a[i].addEventListener("mouseenter", function(event){
            console.log("parent: ", this);

                  function innerFuncOne(){
                      // Tutaj this wskazuje na element Window, bo funkcja została
                      //wywołana bez żadnego kontekstu.
                      console.log("innerFuncOne: ", this);

                  }
                  innerFuncOne();
        });
    }
})
