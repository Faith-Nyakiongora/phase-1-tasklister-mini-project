document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('create-task-form');
    const taskList = document.getElementById('tasks');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault(); 

      const taskInput = document.getElementById('new-task-description');
      const taskDescription = taskInput.value;
  
     
      const taskItem = document.createElement('li');
      taskItem.innerText = taskDescription;
  
      taskList.appendChild(taskItem);
  
      taskInput.value = '';
    });
  });


