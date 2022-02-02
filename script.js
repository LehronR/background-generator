var css = document.querySelector("h3");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("gradient");
var btn = document.getElementById("colorBtn");
var btnColor = document.getElementById("randomBtnColor");

// GENERATE RANDOM NUMBER TO USE FOR SETTING RANDOM GRADIENT
function randomNumber() {
    return Math.floor(Math.random() * 256);
}

// SET MAIN GRADIENT WHEN USING COLOR PICKERS
function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
    css.textContent = body.style.background;
}

// CREATE RANDOM GRADIENT WHEN BUTTON IS PRESSED
function setRandomGradient() {
    body.style.background = `linear-gradient(to right, rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()}), rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
    css.textContent = body.style.background;
}

// RANDOMIZE HOVER EFFECT ON BUTTON. USED HTML EVENT TO CREATE THIS EFFECT USING THIS FUNCTION
function setRandomBtnColor() {
    btn.style.backgroundColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
}

// SET ORIGINAL BUTTON COLOR WHEN NOT HOVERING
function originalBtnBackgroundColor() {
    btn.style.backgroundColor = "rgba(0,0,0,0.5)";
}

// DISPLAY ACCURATE BACKGROUND COLOR INFO ON START OF PAGE
setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btn.addEventListener("click", setRandomGradient); 