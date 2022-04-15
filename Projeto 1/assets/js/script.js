const elementText = document.querySelector("#text_trans");
const elementGif = document.querySelector("img");
let value = document.querySelector("#buttonTrans").value;

function HandleDom() {
  if (value == 0) {
    elementText.innerHTML = "Goku no Kaioken";
    elementGif.setAttribute("src", "./assets/img/goku kaioken.gif");
    value++;
  } else if (value == 1) {
    elementText.innerHTML = "Goku Super Sayajin";
    elementGif.setAttribute("src", "./assets/img/ss1.gif");
    value++;
  } else if (value == 2) {
    elementText.innerHTML = "Goku Super Sayajin 2";
    elementGif.setAttribute("src", "./assets/img/ss2.gif");
    value++;
  } else if (value == 3) {
    elementText.innerHTML = "Goku Super Sayajin 3";
    elementGif.setAttribute("src", "./assets/img/ss3.gif");
    value++;
  } else if (value == 4) {
    elementText.innerHTML = "Goku Modo Deus";
    elementGif.setAttribute("src", "./assets/img/god.gif");
    value++;
  } else if (value == 5) {
    elementText.innerHTML = "Este é o goku!";
    elementGif.setAttribute("src", "./assets/img/gokunormal.gif");
    value = 0;
    console.log(value);
  }
}
