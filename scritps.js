/**
 * Render and manage tasks dynamically on the Kanban board.
 * Author: Palesa Malatshi 🌸
 */

/**
 * Create a task DOM element.
 * @param {Object} task - The task object.
 * @param {number} task.id - The unique task ID.
 * @param {string} task.title - The task title.
 * @param {string} task.description - The task description.
 * @param {string} task.status - The task status ("todo", "doing", "done").
 * @returns {HTMLElement} - The task element ready to be appended.
 */
function createTaskElement(task) {
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task-div");
  taskDiv.dataset.id = task.id;

  const title = document.createElement("h3");
  title.textContent = task.title;

  const desc = document.createElement("p");
  desc.textContent = task.description;

  taskDiv.appendChild(title);
  taskDiv.appendChild(desc);

  return taskDiv;
}

/**
 * Clear all tasks inside each column.
 */
function clearColumns() {
  document.getElementById("todo-tasks").innerHTML = "";
  document.getElementById("doing-tasks").innerHTML = "";
  document.getElementById("done-tasks").innerHTML = "";
}

/**
 * Render all tasks dynamically into the correct columns.
 * @param {Array} tasks - The array of task objects.
 */
function renderTasks(tasks) {
  clearColumns();

  tasks.forEach((task) => {
    const taskEl = createTaskElement(task);

    switch (task.status) {
      case "todo":
        document.getElementById("todo-tasks").appendChild(taskEl);
        break;
      case "doing":
        document.getElementById("doing-tasks").appendChild(taskEl);
        break;
      case "done":
        document.getElementById("done-tasks").appendChild(taskEl);
        break;
      default:
        console.warn(`Unknown status: ${task.status}`);
    }
  });
}

// =========================
// 🚀 Initial Load
// =========================
document.addEventListener("DOMContentLoaded", () => {
  renderTasks(initialTasks);
});
