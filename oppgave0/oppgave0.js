// Oppgave 1
// Set the element with id "remove" to null. could also use ""?
let rmvBtn = document.getElementById("remove-btn");
rmvBtn.addEventListener("click", () => {
    document.getElementById("remove").innerHTML = null;
});

// Oppgave 2
let changeBtn = document.getElementById("change-btn");
changeBtn.addEventListener("click", () => {
    document.getElementById("change").innerHTML = "Simen er best";
});

// Oppgave 3
let textInputBox = document.getElementById("input");
textInputBox.addEventListener("keyup", () => {
    let typedText = textInputBox.value;
    document.getElementById("input-text").innerText = typedText;
});

// Oppgave 4
const myList = ["item one", "item two", "item three"];

// Oppgave 5

// Oppgave 6

// Oppgave 7

// Oppgave 8
