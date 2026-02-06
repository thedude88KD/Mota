function yes() {
  document.getElementById("result").innerHTML =
    "Yayyy Mota! 💕 Tum meri Valentine ho 😍❤️";
}

function moveNo() {
  let x = Math.random() * window.innerWidth * 0.6;
  let y = Math.random() * window.innerHeight * 0.6;

  document.getElementById("noBtn").style.left = x + "px";
  document.getElementById("noBtn").style.top = y + "px";
}
