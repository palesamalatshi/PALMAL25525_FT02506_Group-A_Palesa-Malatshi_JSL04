# Kanban Task Management Board

## Project Description

This is a dynamic, single-page Kanban board application created for the JSL04 challenge. The project allows users to visualize and manage their tasks in a clear, organized "To Do," "Doing," and "Done" layout. The application is built with vanilla JavaScript, emphasizing clean code, modular functions, and a responsive, user-friendly interface. A key feature is the interactive modal, which allows for viewing and editing task details on the fly.

---

## Features ✨

* **Dynamic Task Rendering:** Tasks are loaded and displayed on the board dynamically from a JavaScript data source, with no hardcoded content in the HTML.
* **Column Organization:** Tasks are automatically placed into the correct column based on their status.
* **Interactive Modal:** Clicking a task opens a detailed view where users can:
    * Edit the task title.
    * Modify the task description.
    * Update the task's current status via a dropdown menu.
* **State Management:** Saving changes in the modal updates the application's state and re-renders the board, moving tasks to their new columns instantly.
* **Responsive Design:** The layout is fully responsive and provides a seamless experience on desktop, tablet, and mobile devices.

---

## Technologies Used 💻

* **HTML5:** For the core structure and content.
* **CSS3:** For all styling, including Flexbox, Grid, CSS Variables, and media queries for responsiveness.
* **JavaScript (ES6+):** For all dynamic functionality, DOM manipulation, and event handling.

---

## Setup and Usage 🚀

1.  **Clone the Repository:**
    ```bash
    git clone <your-repository-url>
    ```
2.  **Navigate to the Directory:**
    ```bash
    cd <repository-folder-name>
    ```
3.  **Open in Browser:**
    * Simply open the `index.html` file in your favorite web browser (like Chrome, Firefox, or Edge).

---

## How to Interact with the Board

* **View Task Details:** Click on any task card to open the modal and see its full title and description.
* **Edit a Task:** Inside the modal, change the text in the title or description fields, or select a new status from the dropdown.
* **Save Changes:** Click the "Save Changes" button to update the task. The modal will close, and you'll see your changes reflected on the board immediately.

---

## Author

**Palesa Malatshi**