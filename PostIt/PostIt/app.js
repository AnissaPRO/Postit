const newPostIt = document.getElementById('new');
const newPostIt1 = document.getElementById('new1');
const newPostIt2 = document.getElementById('new2');
let i = 0;

newPostIt.addEventListener('click', function (event) {
    let post1 = new Postit('post1');
    post1.InsertText("test 1 2");
    post1.affiche();
    
  

    
  });





/* A VOIR PLUS TARD
  newPostIt1.addEventListener('click', function (event) {
    let post2 = new Postit('post2');
    post2.changeColor(blue)
    post2.affiche();
    alert("ok");

    
  });
*/
