const css = document.querySelector("p")
const colorOne = document.querySelector("#colorOne")
const colorTwo = document.querySelector("#colorTwo")
const gradientBG =document.querySelector("#gradientBG")

function cssGradient() {
    gradientBG.style.background = 
    "linear-gradient(to right, "
    + colorOne.value
    + ", "
    + colorTwo.value
    + ")"

    css.textContent = gradientBG.style.background + ";"
}

colorOne.addEventListener("input", cssGradient)
colorTwo.addEventListener("input", cssGradient)