// --------------------------------------------------------------------------------
// JSL04: Dynamic Task Display & Modal View
// Palesa Malatshi
// --------------------------------------------------------------------------------

/**
 * An array of task objects that represents the initial state of the Kanban board.
 * @type {Array<{id: number, title: string, description: string, status: string}>}
 */
const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career 🚀",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript 💛",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Keep on Going 🏆",
    description: "You're almost there",
    status: "doing",
  },
  {
    id: 11,
    title: "Learn Data Structures and Algorithms 📚",
    description: "Study fundamental data structures and algorithms...",
    status: "todo",
  },
  {
    id: 12,
    title: "Contribute to Open Source Projects 🌐",
    description: "Gain practical experience and collaborate with others...",
    status: "done",
  },
  {
    id: 13,
    title: "Build Portfolio Projects 🛠️",
    description: "Create a portfolio showcasing your skills...",
    status: "done",
  },
];

const state = {
  tasks: initialTasks,
  currentTaskId: null,
};

// DOM Element Selectors
const columns = {
  todo: document.querySelector('.column-div[data-status="todo"] .tasks-container'),
  doing: document.querySelector('.column-div[data-status="doing"] .tasks-container'),
  done: document.querySelector('.column-div[data-status="done"] .tasks-container'),
};
const columnHeaders = {
    todo: document.querySelector('#todo-head-div .columnHeader'),
    doing: document.querySelector('#doing-head-div .columnHeader'),
    done: document.querySelector('#done-head-div .columnHeader'),
};
const modalContainer = document.getElementById("modal-container");
const modalTaskTitleInput = document.getElementById("modal-task-title");
const modalTaskDescriptionInput = document.getElementById("modal-task-description");
const modalStatusSelect = document.getElementById("modal-status-select");
const closeModalBtn = document.getElementById("close-modal-btn");
const saveTaskBtn = document.getElementById("save-task-btn");

/**
 * Creates an HTML element for a single task.
 * @param {object} task - The task object.
 * @returns {HTMLElement} The created task div element.
 */
const createTaskElement = (task) => {
  const taskDiv = document.createElement("div");
  taskDiv.className = "task-div";
  taskDiv.textContent = task.title;
  taskDiv.setAttribute("data-task-id", task.id);
  taskDiv.addEventListener("click", () => openModal(task.id));
  return taskDiv;
};

/**
 * Renders all tasks from the state to their respective columns in the DOM.
 */
const renderTasks = () => {
  // Clear existing tasks
  columns.todo.innerHTML = "";
  columns.doing.innerHTML = "";
  columns.done.innerHTML = "";
  
  const taskCounts = { todo: 0, doing: 0, done: 0 };

  // Render each task
  for (const task of state.tasks) {
    const taskElement = createTaskElement(task);
    columns[task.status].appendChild(taskElement);
    taskCounts[task.status]++;
  }
  
  // Update column headers with counts
  columnHeaders.todo.textContent = `TODO (${taskCounts.todo})`;
  columnHeaders.doing.textContent = `DOING (${taskCounts.doing})`;
  columnHeaders.done.textContent = `DONE (${taskCounts.done})`;
};

/**
 * Opens the modal and populates it with data for a given task ID.
 * @param {number} taskId - The ID of the task to be displayed in the modal.
 */
const openModal = (taskId) => {
  state.currentTaskId = taskId;
  const task = state.tasks.find((t) => t.id === taskId);

  if (task) {
    modalTaskTitleInput.value = task.title;
    modalTaskDescriptionInput.value = task.description;
    modalStatusSelect.value = task.status;
    modalContainer.classList.remove("hidden");
  }
};

/**
 * Closes the modal.
 */
const closeModal = () => {
  modalContainer.classList.add("hidden");
};

/**
 * Saves the changes from the modal to the task in the state and re-renders the board.
 */
const saveTask = () => {
  const task = state.tasks.find((t) => t.id === state.currentTaskId);

  if (task) {
    task.title = modalTaskTitleInput.value.trim();
    task.description = modalTaskDescriptionInput.value.trim();
    task.status = modalStatusSelect.value;
  }

  renderTasks();
  closeModal();
};

// Event Listeners
closeModalBtn.addEventListener("click", closeModal);
saveTaskBtn.addEventListener("click", saveTask);

// Initial Load
document.addEventListener("DOMContentLoaded", () => {
  renderTasks();
});