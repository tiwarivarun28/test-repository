document.querySelector("form").addEventListener("submit", myTodo);

var todo = JSON.parse(localStorage.getItem("todo")) || [];
displayTodos();
function myTodo() {
  event.preventDefault();
  var task = document.getElementById("task").value;
  var priority = document.getElementById("priority").value;
  var obj = { task: task, priority: priority };
  todo.push(obj);
  localStorage.setItem("todo", JSON.stringify(todo));
  displayTodos();
}
function deleteTask(index) {
  // event.target.parentNode.remove();
  todo.splice(index, 1);
  localStorage.setItem("todo", JSON.stringify(todo));
  displayTodos();
}

function displayTodos() {
  document.querySelector("tbody").textContent = "";
  todo.map(function (elem, index) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.textContent = elem.task;
    var td2 = document.createElement("td");
    td2.textContent = elem.priority;
    if (elem.priority == "High") {
      //  td2.style.backgroundColor="crimson";
      td2.setAttribute("id", "high");
    } else {
      //  td2.style.backgroundColor="seagreen";
      td2.setAttribute("id", "low");
    }

    var td3 = document.createElement("td");
    td3.textContent = "delete";
    td3.addEventListener("click", function () {
      deleteTask(index);
    });

    tr.append(td1, td2, td3);
    document.querySelector("tbody").append(tr);
  });
}
