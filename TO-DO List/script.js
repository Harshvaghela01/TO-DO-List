const form = document.getElementById("add-task-form");
const input = document.getElementById("new-task-input");
const taskList = document.getElementById("task-list");

form.addEventListener("submit", addTask);

function addTask(event) {
  event.preventDefault();
  const taskName = input.value;
  if (taskName === "") {
    return;
  }
  const li = document.createElement("li");
  li.innerText = taskName;
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "X";
  deleteButton.className = "delete-button";
  deleteButton.addEventListener("click", deleteTask);
  li.appendChild(deleteButton);
  taskList.appendChild(li);
  input.value = "";
}

function deleteTask(event) {
  const li = event.target.parentElement;
  li.remove();
}
