window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  const container = document.getElementById("container");
  const counter= "0123456789abcdef".split(""); // counter for unicode
  let range = n => [...Array(n).keys()];
  const computeLoop = (iteration, fx) => range(iteration).forEach((k,i) => fx(i));
  const getRadical = (i) => String.fromCodePoint(`0x2f${counter[Math.floor(i/10)%14]}${counter[Math.floor(i/100)%16]}`);

  computeLoop(Math.floor(window.innerHeight/55), () => {
    const randomIndex = getRandomInt(0, 214);
    const char = document.createElement("div");
    const spanL = document.createElement("span");
    const spanR = document.createElement("span");
    char.className = "character";
    spanL.className = "left";
    spanR.className = "right";
    // setInterval(() => spanR.style.marginTop = +(spanR.style.marginTop.split("px")[0])-1+"px", 250);
    // setInterval(() => spanR.style.marginTop = +(spanR.style.marginTop.split("px")[0])+2+"px", 300);
    spanL.innerText = getRadical(randomIndex);
    spanR.innerText = getRadical(randomIndex);
    char.appendChild(spanL);
    char.appendChild(spanR);
    container.appendChild(char);
  });

  // setInterval(() => location.reload(), 2500);
});
