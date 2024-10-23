document.getElementById('addTaskBtn').addEventListener('click', function() {
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create new list item
    var listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Add checkbox to list item
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            listItem.classList.add('completed');
            document.getElementById('completedTasks').appendChild(listItem);
        } else {
            listItem.classList.remove('completed');
            document.getElementById('pendingTasks').appendChild(listItem);
        }
    });

    listItem.appendChild(checkbox);
    document.getElementById('pendingTasks').appendChild(listItem);

    // Clear input
    taskInput.value = '';
});
