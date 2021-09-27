import CheckButton from './components/checkTask.js'
import DeleteButton from './components/deleteTask.js'
 
const createTask = (event) => {

    event.preventDefault();

    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const input_value = input.value;

    const task = document.createElement('li');
    
    const paragraph = `<p class="content">${input_value}</p>`;

    task.classList.add('task');

    task.innerHTML = paragraph;

    task.appendChild(CheckButton());
    task.appendChild(DeleteButton());
    list.appendChild(task);
    input.value = "";

}

const button = document.querySelector('[data-form-button]');

button.addEventListener('click', createTask);