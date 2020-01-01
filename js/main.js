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

animateCodeBubble();
