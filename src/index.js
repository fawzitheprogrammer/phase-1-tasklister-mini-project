document.addEventListener('DOMContentLoaded', () => {
  const createTaskForm = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  createTaskForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting traditionally
    
    // Capture the task description from the input field
    const newTaskDescription = document.getElementById('new-task-description').value;

    // Create a new list item and set its text content
    const newTask = document.createElement('li');
    newTask.textContent = newTaskDescription;

    // Add the new task to the list
    taskList.appendChild(newTask);

    // Clear the input field after adding the task
    createTaskForm.reset();
  });
});

