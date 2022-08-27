// Oppgave 1
const rmvBtn = document.getElementById("remove-btn");

function removeText() {
    const removeThis = document.getElementById("remove");
    removeThis.remove();
}

rmvBtn.addEventListener("click", () => {removeText()});


// Oppgave 2
const changeBtn = document.getElementById("change-btn")

changeBtn.addEventListener("click", () => {
    document.getElementById("change").innerText = "Simen er best";
});


// Oppgave 3
// Fetching what's typed into the InputBox by using .value
const textInputBox = document.getElementById("input");
textInputBox.addEventListener("keyup", () => {
    let typedText = textInputBox.value;
    document.getElementById("input-text").innerText = typedText;
});

// Oppgave 4
const myList = ["item one", "item two", "item three"];
const ul4 = document.getElementById("ul");
const writeListBtn = document.getElementById("write-list");

// function creating li elements from the array.
function createLiElement() {
    if (myList.length !== 0) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(myList.shift()));
        ul4.appendChild(li);
    }
}

writeListBtn.addEventListener("click", () => {createLiElement()});


// Oppgave 5
const textVisual = document.getElementById("placeholder");
const tagInput = document.getElementById("select");
const textInput = document.getElementById("text");
const createBtn = document.getElementById("create");

function userCreatedNode() {
    let node = document.createElement(tagInput.value);
    node.textContent = textInput.value;
    if (!textVisual.childElementCount) {
        textVisual.appendChild(node);
    }else{
        textVisual.removeChild(textVisual.firstChild);
        textVisual.appendChild(node);
    }
}

createBtn.addEventListener("click", () => {userCreatedNode()});


// Oppgave 6
let ul6 = document.getElementById("list");
const removeLiBtn = document.getElementById("remove-li");

removeLiBtn.addEventListener("click", () => {
    ul6.removeChild(ul6.lastElementChild);
});


// Oppgave 7
const inputName = document.getElementById("name");
const orderBtn = document.getElementById("order");

function stringLengthMaxCheck(string) {
    return string.length > 4 ? true : false;
}

inputName.addEventListener("keyup", () => {
    orderBtn.disabled = stringLengthMaxCheck(inputName.value);
});


// Oppgave 8
const setColorBtn = document.getElementById("color");
const ul8 = document.querySelectorAll(".children li");

for (let i = 0; i <= ul8.length -1; i++) {
    console.log(ul8[i]);
}

function oddOrEven(number) {
    return number % 2 == 0 ? true : false;
}

