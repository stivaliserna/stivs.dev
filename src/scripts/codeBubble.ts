export const animateCodeBubble = (): void => {
  const codeBubble = document.querySelector(".code-bubble") as HTMLElement;
  const highlight = document.querySelector(".select-all") as HTMLElement;
  const linesGroup = document.querySelector(".lines") as HTMLElement;
  const lines = Array.from(document.querySelectorAll(".lines path")) as HTMLElement[];

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

    setTimeout(deleteCode, 400);
  };

  const startTyping = () => {
    linesGroup.style.display = "block";

    lines[lines.length - 1].addEventListener("animationend", selectAll);
    codeBubble.classList.add("animating");
  };

  startTyping();
};

animateCodeBubble();
