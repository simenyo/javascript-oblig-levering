// Oppgave 1
// Set the element with id "remove" to null. could also use ""?
let rmvBtn = document.getElementById("remove-btn");
rmvBtn.addEventListener("click", () => {
    document.getElementById("remove").innerHTML = null;
});

// Oppgave 2
// Using innerText instead of innerHtml.
let changeBtn = document.getElementById("change-btn");
changeBtn.addEventListener("click", () => {
    document.getElementById("change").innerText = "Simen er best";
});

// Oppgave 3
// Fetching what's typed into the InputBox by using .value
let textInputBox = document.getElementById("input");
textInputBox.addEventListener("keyup", () => {
    let typedText = textInputBox.value;
    document.getElementById("input-text").innerText = typedText;
});

// Oppgave 4
const myList = ["item one", "item two", "item three"];

let ul = document.getElementById("ul");
let writeListBtn = document.getElementById("write-list");
let i = 0;
writeListBtn.addEventListener("click", () => {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(myList[i]));
    i++;
    ul.appendChild(li);
});

// Oppgave 5

// Oppgave 6

// Oppgave 7

// Oppgave 8
