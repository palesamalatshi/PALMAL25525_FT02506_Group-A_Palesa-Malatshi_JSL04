import { initialTasks } from './initialData.js';

// Global variables for DOM elements.
// These variables correctly reference the elements in your HTML.
const modalContainer = document.querySelector('.modal-container');
const closeModalBtn = document.getElementById('close-modal-btn');
const addTaskBtn = document.getElementById('add-task-btn');
const todoColumn = document.querySelector('[data-status="todo"] .tasks-container');
const doingColumn = document.querySelector('[data-status="doing"] .tasks-container');
const doneColumn = document.querySelector('[data-status="done"] .tasks-container');

// A copy of the initial data to be mutated
let tasks = [...initialTasks];

/**
 * Renders tasks onto the Kanban board columns from an array of task objects.
 * This is the function that populates your board with tasks from initialData.js.
 * @param {Array<Object>} tasks - The array of task objects to be rendered.
 */
function renderTasks(tasks) {
  // Clear existing tasks from the DOM
  todoColumn.innerHTML = '';
  doingColumn.innerHTML = '';
  doneColumn.innerHTML = '';

  tasks.forEach(task => {
    const taskElement = createTaskElement(task);
    if (task.status === 'todo') {
      todoColumn.appendChild(taskElement);
    } else if (task.status === 'doing') {
      doingColumn.appendChild(taskElement);
    } else if (task.status === 'done') {
      doneColumn.appendChild(taskElement);
    }
  });

  updateTaskCounts(tasks);
}

/**
 * Creates an HTML element for a given task object.
 * Each task is an interactive component thanks to this function.
 * @param {Object} task - The task object containing id, title, description, and status.
 * @returns {HTMLElement} The created task element.
 */
function createTaskElement(task) {
  const taskDiv = document.createElement('div');
  taskDiv.className = 'task-div';
  taskDiv.textContent = task.title;

  taskDiv.addEventListener('click', () => {
    displayModal(task);
  });
  return taskDiv;
}

/**
 * Displays the modal with the details of the clicked task.
 * This function handles populating the modal with the correct data and making it visible with a backdrop.
 * @param {Object} task - The task object to display in the modal.
 */
function displayModal(task) {
  const modalTitle = document.getElementById('modal-task-title');
  const modalDescription = document.getElementById('modal-task-description');
  const modalStatus = document.getElementById('modal-status-select');

  modalTitle.textContent = task.title;
  modalDescription.textContent = task.description;
  modalStatus.value = task.status;

  modalContainer.classList.remove('hidden');
}

/**
 * Closes the task details modal, giving users a seamless exit.
 */
function closeModal() {
  modalContainer.classList.add('hidden');
}

/**
 * Updates the task count in each column header to reflect the current number of tasks.
 * This keeps the UI accurate and in sync with the data.
 * @param {Array<Object>} tasks - The array of task objects.
 */
function updateTaskCounts(tasks) {
  const todoCount = tasks.filter(task => task.status === 'todo').length;
  const doingCount = tasks.filter(task => task.status === 'doing').length;
  const doneCount = tasks.filter(task => task.status === 'done').length;

  document.getElementById('toDoText').textContent = `TODO (${todoCount})`;
  document.getElementById('doingText').textContent = `DOING (${doingCount})`;
  document.getElementById('doneText').textContent = `DONE (${doneCount})`;
}

// Event listeners for user interaction
// These are the listeners that make the buttons work.
closeModalBtn.addEventListener('click', closeModal);
modalContainer.addEventListener('click', (event) => {
  if (event.target === modalContainer) {
    closeModal();
  }
});

addTaskBtn.addEventListener('click', () => {
  // Clears the modal for a new task entry
  const modalTitle = document.getElementById('modal-task-title');
  const modalDescription = document.getElementById('modal-task-description');
  const modalStatus = document.getElementById('modal-status-select');

  modalTitle.textContent = 'New Task Title';
  modalDescription.textContent = 'Enter description here';
  modalStatus.value = 'todo';

  modalContainer.classList.remove('hidden');
});

// Initial call to render tasks on page load.
renderTasks(tasks);