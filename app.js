function insert(num) {
    sqreen.innerHTML = document.querySelector(".sqreen").innerHTML + num;
}

function cleanSqreen() {
    sqreen.innerHTML = ""
}

function removeLastNumber() {
    let newText = sqreen.textContent.substr(0, sqreen.textContent.length - 1);
    sqreen.innerHTML = newText
}

function equalNumbs() {
    if (sqreen.textContent) {
        sqreen.textContent = eval(sqreen.textContent)
    } else {
        alert("Enter numbers")
    }
}

document.querySelectorAll(".button").forEach(button => button.addEventListener("click", (e) => {
    insert(e.target.textContent)
}))

const clean = document.querySelector(".clean");
const deleteNum = document.querySelector(".delete");
const sqreen = document.querySelector(".sqreen");
const equal = document.querySelector(".equal");

equal.addEventListener("click", equalNumbs)
clean.addEventListener("click", cleanSqreen);
deleteNum.addEventListener("click", removeLastNumber);
