document.addEventListener("DOMContentLoaded", function(){
  var art = document.querySelectorAll('article');

  art[0].querySelector('a').addEventListener('click', function(){
    art[0].querySelector('.content').style.display = 'block';
    });
  art[1].querySelector('a').addEventListener('click', function(){
    art[1].querySelector('.content').style.display = 'block';
    });



});
