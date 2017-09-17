document.addEventListener("DOMContentLoaded", function(){

  var parent = document.querySelectorAll('.parent');
  console.log("kok");

  for (var i = 0; i < parent.length; i++) {
    parent[i].addEventListener('mouseenter', function(e) {
      console.log(this);
      this.querySelector('.children').style.display = "block";
    });
    parent[i].addEventListener('mouseleave', function(e) {
      console.log(this);
      this.querySelector('.children').style.display = "none";
    });
  }


  });
