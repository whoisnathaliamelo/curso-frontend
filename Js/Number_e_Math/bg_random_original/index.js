let body = document.getElementsByTagName("body")[0];
let arr = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
];
let sorteioImagem = Math.floor(Math.random() * arr.length);
body.style.backgroundImage = `url(${arr[sorteioImagem]})`;
console.log(sorteioImagem);
