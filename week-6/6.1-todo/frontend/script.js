
const API_URL = 'http://localhost:3001/todos';


// Fetch existing todos when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // fetch todos
    fetchTodos();
});

// Fetch todos from backend
async function fetchTodos() {
    //  write here
    await fetch(API_URL)
        .then(response => response.json())
        .then(todos => {
            todos.foreach(todo => addTodoToDOM(todo))
        })
        .catch(error => console.log(error))
}

// Add a new todo to the DOM
async function addTodoToDOM(todo) {
    //  write here
    const todolist = document.getElementById("todo-list");

    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');
    todoItem.setAttribute('data-id', todo.id);

    const title = document.createElement('span');
    title.textContent = todo.task;

    const button = document.createElement("button");
    button.textContent = "delete";
    button.addEventListener("click", () => deleteTodo(todo.id));

    todoItem.appendChild(title);
    todoItem.appendChild(button);

    todolist.appendChild(todoItem);


}

// Add a new todo
document.getElementById('add-todo-btn').addEventListener('click', async () => {
    //  write here
    const newTodo = document.getElementById('todo-input').value;
    console.log(newTodo);
    fetch(API_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task: newTodo }),
    })
        .then(response => response.json())
        .then(todo => {
            addTodoToDOM(todo);
            newTodo.value = '';
        })
        .catch(error => console.error('Error adding todo:', error));

});

// Toggle todo completion
function toggleTodo(id, completed) {
    //    write here
}

// Delete a todo
async function deleteTodo(id) {
    // write here  
    fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    })
        .then(() => {
            const todoItem = document.querySelector(`[data-id='${id}']`);
            todoItem.remove();
        })
        .catch(error => console.error('Error deleting todo:', error));
}