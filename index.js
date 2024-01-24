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
  const shape = [3,4,6,7,9,9,10,9,9,7,6,4];
  const chHeight = 16;
  const timeInterval = 250;

  function disperse(elem1, elem2=null) {
    switch(Math.random()>0.5) {
      case false:
        elem1.style.marginTop = +(elem1.style.marginTop.split("px")[0])-0.5+"px";
        // elem2.style.marginTop = +(elem2.style.marginTop.split("px")[0])-1+"px";
        break;
      case true:
        elem1.style.marginTop = +(elem1.style.marginTop.split("px")[0])+0.5+"px";
        // elem2.style.marginTop = +(elem2.style.marginTop.split("px")[0])+1+"px";
        break;
      default:
        break;
    }
  }

  computeLoop(12, (index) => {
    const bar = document.createElement("div");
    bar.className = "bar";
    computeLoop(Math.floor(window.innerHeight/55), () => {
      const randomIndex = getRandomInt(0, 214);
      const char = document.createElement("div");
      const spanL = document.createElement("span");
      const spanR = document.createElement("span");
      char.className = "character";
      spanL.className = "left";
      spanR.className = "right";
      setInterval(() => disperse(spanL,spanR), timeInterval);
      setInterval(() => disperse(spanR), timeInterval);
      spanL.innerText = getRadical(randomIndex);
      spanR.innerText = getRadical(randomIndex);
      char.appendChild(spanL);
      char.appendChild(spanR);
      bar.appendChild(char);
    });
    bar.style.maxHeight = shape[index]*chHeight+"px";
    container.appendChild(bar);
  });
});
