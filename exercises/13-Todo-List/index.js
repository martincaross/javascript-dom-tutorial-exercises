// Your code here
const inputField = document.getElementById("addToDo");
const todoList = document.querySelector("ul");

function addTask() {
    const taskText = inputField.value.trim();

    if (taskText !== "") {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<span><i class="fa fa-trash"></i></span> ${taskText}`;
        todoList.appendChild(listItem);
        inputField.value = "";
    }
}

function deleteTask(event) {
    const clickedElement = event.target;
    if (clickedElement.classList.contains("fa-trash")) {
        const listItem = clickedElement.parentElement.parentElement;
        todoList.removeChild(listItem);
  }
}

inputField.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

todoList.addEventListener("click", deleteTask);