// Oppgave 1
// Set the element with id "remove" to null. could also use ""?
const rmvBtn = document.getElementById("remove-btn");
rmvBtn.addEventListener("click", () => {
    document.getElementById("remove").innerHTML = null;
});

// Oppgave 2
// Using innerText instead of innerHtml.
const changeBtn = document.getElementById("change-btn");
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

// fetching the relevant html entities.
const ul = document.getElementById("ul");
const writeListBtn = document.getElementById("write-list");

// on click fetches the first element from the array until it's empty.
writeListBtn.addEventListener("click", () => {
    let li = document.createElement("li");
    if (myList.length !== 0) {
        li.appendChild(document.createTextNode(myList.shift()));
        ul.appendChild(li);
    }
});

// Oppgave 5
const textVisual = document.getElementById("placeholder");
const tagInput = document.getElementById("select");
const textInput = document.getElementById("text");
const createBtn = document.getElementById("create");
let tagInputEventTriggered = false;

// const TagAndText = {
//     tag: "",
//     text: "",
// };

/**
 * Eventhandler on "blur" instead of "change". If user opens dropdown but does
 * not change the value this will not trigger the eventlistener when using "change".
 */
// tagInput.addEventListener("blur", () => {
//     TagAndText.tag = tagInput.value;
//     tagInputEventTriggered = true;
// });

// textInput.addEventListener("keyup", () => {
//     TagAndText.text = textInput.value;
// });

createBtn.addEventListener("click", () => {
    // if (!tagInputEventTriggered) {
    //     TagAndText.tag = tagInput.value;
    // }

    let node = document.createElement(tagInput.value);
    node.textContent = textInput.value;
    if (!textVisual.childElementCount) {
        textVisual.appendChild(node);
    }else{
        textVisual.removeChild(textVisual.firstChild);
        textVisual.appendChild(node);
    }

    // node.appendChild(document.createTextNode(obj.text));
    // console.log(!placeholder.childElementCount);
    // if (!placeholder.childElementCount) {
    //     placeholder.appendChild(node);
    // }else{
    //     placeholder.removeChild(node);
    // }

});

// Oppgave 6

// Oppgave 7

// Oppgave 8
