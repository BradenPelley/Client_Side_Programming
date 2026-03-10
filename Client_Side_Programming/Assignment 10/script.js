//This selects the canvas element from the HTML document.
const canvas = document.getElementById("canvas");

//This gets the 2D drawing context from the canvas. The context allows us to draw shapes, text, and animations.
const ctx = canvas.getContext("2d");


//This sets the canvas width and height to match the browser window.
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


//These are the characters that will fall down the screen. These represent the "Matrix rain" symbols.
const letters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";


//This is the font size that determines the size of each character.
const fontSize = 18;


//This calculates how many columns of text can fit across the screen.
//Example: if screen width = 900px and font size = 18px, then about 50 columns will fit.
const columns = Math.floor(canvas.width / fontSize);


//This is the array that stores the vertical position of each falling column. Each index represents one column of rain.
let drops = [];


//This will initialize the starting positions for each column. Some will start slightly lower than others so the rain looks random.
for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * canvas.height / fontSize;
}


//This is the main animation function.
function animate() {

    //This will draw a semi transparent black rectangle over the screen, which creates the fading trail effect.
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);


    //This sets the color of the falling text.
    ctx.fillStyle = "lime";

    //This sets the font style and size.
    ctx.font = fontSize + "px monospace";


    //This loops through every column.
    for (let i = 0; i < drops.length; i++) {

        //This will choose a random character from the letters string.
        const text = letters.charAt(Math.floor(Math.random() * letters.length));

        //This will draw the character on the canvas.
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        //This will move the drop down one row.
        drops[i]++;

        //If the drop reaches the bottom of the screen, this will occasionally reset it to the top to restart the fall.
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.97) {
            drops[i] = 0;
        }
    }

    //The code 'requestAnimationFrame' tells the browser to run the 'animate()' function again on the next frame, creating a smooth animation.
    requestAnimationFrame(animate);
}


//This starts the animation.
animate();


//If the browser window is resized, this will update the canvas size to match the new window size.
window.addEventListener("resize", function () {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});