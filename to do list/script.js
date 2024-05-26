let tasks = [];

function addTask(event) {
    event.preventDefault();

    const taskNameInput = document.getElementById('taskName');
    const taskDescriptionInput = document.getElementById('taskDescription');

    const task = {
        name: taskNameInput.value,
        description: taskDescriptionInput.value,
        completed: false
    };

    tasks.push(task);

    taskNameInput.value = '';
    taskDescriptionInput.value = '';

    displayTasks();
}

function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];

        const li = document.createElement('li');
        li.innerHTML = `
      <input type="checkbox" onchange="toggleTaskCompleted(${i})" ${task.completed ? 'checked' : ''}>
      <span class="${task.completed ? 'completed' : ''}">${task.name}</span>
      <button onclick="editTask(${i})">Upravit</button>
      <button onclick="deleteTask(${i})">Smazat</button>
    `;

        taskList.appendChild(li);
    }
}

function toggleTaskCompleted(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function editTask(index) {
    const newName = prompt('Zadejte nový název úkolu:');
    const newDescription = prompt('Zadejte nový popis úkolu:');

    tasks[index].name = newName;
    tasks[index].description = newDescription;

    displayTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

const taskForm = document.getElementById('taskForm');
taskForm.addEventListener('submit', addTask);

displayTasks();