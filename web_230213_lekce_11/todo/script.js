var itemCount = 0;

function addToDo(){
    const userTodo = document.getElementById("todoInput").value;
    const table = document.getElementById("todoTable");

    let newRow = document.createElement("tr");
    newRow.id = itemCount;

    let newTodo = document.createElement("td");
    newTodo.innerText = userTodo;

    let newRemoveButtonRow = document.createElement("td");
    let removeButton = document.createElement("button");
        removeButton.innerText = "X";
        removeButton.onclick = () => {
            removeTodo(itemCount);
        };
    newRemoveButtonRow.appendChild(removeButton);

    newRow.appendChild(newTodo);
    newRow.appendChild(newRemoveButtonRow);

    table.appendChild(newRow);

    itemCount++;
}

function removeTodo(id){
    document.getElementById(id).remove();
}