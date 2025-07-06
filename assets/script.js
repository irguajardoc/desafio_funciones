const ele = document.getElementById("e1e1");

const pintar = (elemento, color = 'green') => {
    elemento.style.backgroundColor = color;
};

ele.addEventListener("click", () => pintar(ele, 'yellow'));