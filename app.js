//alert("test");
//h3=빈글자
const css = document.querySelector("h3");
//색입력 2개 input(컬러1,2)
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
//id만 선택해주는 명령어(getElementById)
const body = document.getElementById("gradient");

function setcolor() {
  //alert("색바꿈!");
  body.style.background = `linear-gradient(to right, ${color1.value} , ${color2.value}`;
  css.textContent = body.style.background + ";";
}

color1.addEventListener("change", setcolor);
color2.addEventListener("change", setcolor);
