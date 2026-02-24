//DOM selection
const messageInput = document.getElementById("messageInput");
const showBtn = document.getElementById("showBtn");
const colorBtn = document.getElementById("colorBtn");
const addNoteBtn = document.getElementById("addNoteBtn");
const removeNoteBtn = document.getElementById("removeNoteBtn");
const resetBtn = document.getElementById("resetBtn");
const card = document.getElementById("card");

let note = null;

//This code shows the message
showBtn.onclick = function () {
    card.textContent = messageInput.value;
    card.style.display = "block";
};

//This code changes the color
colorBtn.onclick = function () {
    card.style.backgroundColor = "darkblue";
    card.style.color = "white";
};

//This code adds the note
addNoteBtn.onclick = function () {
    if (!note) {
        note = document.createElement("p");
        note.textContent = "This is a small note.";
        card.appendChild(note);
    }
};

//This code removes the note
removeNoteBtn.onclick = function () {
    if (note) {
        note.remove();
        note = null;
    }
};

//This code resets everything
resetBtn.onclick = function () {
    card.textContent = "";
    card.style.backgroundColor = "lightgray";
    card.style.color = "black";

    if (note) {
        note.remove();
        note = null;
    }

    card.style.display = "none";
    messageInput.value = "";
};