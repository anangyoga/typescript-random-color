"use strict";
const color = ["#DADBBD", "#BB6464", "#1C658C", "#125C13", "#BFFFF0", "#49FF00", "#dd4a48"];
const btnChange = document.getElementsByTagName("button")[0];
btnChange.addEventListener("click", () => {
    let randomColor = color[Math.floor(Math.random() * color.length)];
    let container = document.querySelector(".container");
    container.style.backgroundColor = randomColor;
});
