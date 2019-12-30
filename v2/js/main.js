const animateCodeBubble = () => {
  const codeBubble = document.querySelector(".code-bubble");
  const highlight = document.querySelector(".select-all");
  const linesGroup = document.querySelector(".lines");
  const lines = [...document.querySelectorAll(".lines path")];

  lines.forEach((line, i) => {
    line.style.animationDelay = `${i * 35}ms`;
  });

  const deleteCode = () => {
    highlight.style.display = "none";
    linesGroup.style.display = "none";
    codeBubble.classList.remove("animating");
    setTimeout(startTyping, 700);
  };

  const selectAll = () => {
    highlight.style.display = "block";

    setTimeout(deleteCode, 350);
  };

  const startTyping = () => {
    linesGroup.style.display = "block";

    lines[lines.length - 1].addEventListener("animationend", selectAll);
    codeBubble.classList.add("animating");
  };

  startTyping();
};

const animateDrawBubble = () => {
  const petal = document.querySelector(".petal");
  const touchActive = document.querySelector(".touch-active")
  const touch = document.querySelector(".touch")

  const changeSecondColor = () => {
    touch.style.transform = "translate(9%, -2.5%)"
    touchActive.style.transform = "translate(9%, -2.5%)"
    petal.style.fill = "#9E85A6"
    setTimeout(changeFirstColor, 2000)
  }

  const changeFirstColor = () => {
    touch.style.transform = "translate(6%, -2.5%)"
    touchActive.style.transform = "translate(6%, -2.5%)"
    petal.style.fill = "#845C90";
    setTimeout(changeSecondColor, 700)
  }

  changeFirstColor()
}

const animateBlenderBubble = () => {
  const cube = document.querySelector(".cube")
  const xAxis = document.querySelector(".x")
  const yAxis = document.querySelector(".y")

  const rotateFront = () => {
    cube.classList.remove("show-right")

    cube.classList.add("show-front")
    xAxis.style.stroke = "#CC4452"
    yAxis.style.stroke = "#2F79CB"

    setTimeout(rotateRight, 2000)
  }

  const rotateRight = () => {
    cube.classList.remove("show-front")

    cube.classList.add("show-right")
    xAxis.style.stroke = "#BDF971"
    setTimeout(rotateFront, 700)
  }

  rotateRight()
}
 
animateCodeBubble();
animateDrawBubble();
animateBlenderBubble();
