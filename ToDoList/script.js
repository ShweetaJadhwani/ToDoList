document.getElementById('add-task-button').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText) {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(text) {
    const taskList = document.getElementById('task-list');

    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    const taskText = document.createElement('span');
    taskText.className = 'task-text';
    taskText.textContent = text;

    const taskButtons = document.createElement('div');
    taskButtons.className = 'task-buttons';

    const completeButton = document.createElement('button');
    completeButton.textContent = '✔️';
    completeButton.addEventListener('click', function() {
        taskItem.classList.toggle('completed');
    });

    const editButton = document.createElement('button');
    editButton.textContent = '✏️';
    editButton.addEventListener('click', function() {
        const newText = prompt('Edit task', taskText.textContent);
        if (newText) {
            taskText.textContent = newText;
        }
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '🗑️';
    deleteButton.addEventListener('click', function() {
        taskItem.remove();
    });

    taskButtons.appendChild(completeButton);
    taskButtons.appendChild(editButton);
    taskButtons.appendChild(deleteButton);

    taskItem.appendChild(taskText);
    taskItem.appendChild(taskButtons);

    taskList.appendChild(taskItem);
}
