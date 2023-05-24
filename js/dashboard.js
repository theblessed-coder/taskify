// script.js
const tasksPerPage = 5; // Number of tasks to display per page
let currentPage = 1;
let tasks = []; // Placeholder for the list of tasks

// Function to fetch tasks from the server (replace with your own implementation)
function fetchTasks() {
  // Make an AJAX request to the server and retrieve the tasks
  // Replace this with your own implementation to fetch tasks from a database or an API
  // Example:
  tasks = [
    {
      id: 1,
      title: 'Task 1',
      dueDate: '2023-05-25',
      priority: 'High',
      status: 'completed',
    },
    {
      id: 2,
      title: 'Task 2',
      dueDate: '2023-05-26',
      priority: 'Medium',
      status: 'pending',
    },
    {
      id: 3,
      title: 'Task 3',
      dueDate: '2023-05-27',
      priority: 'Low',
      status: 'pending',
    },
    // Add more tasks here...
  ];
}

// Function to display tasks on the dashboard
function displayTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = ''; // Clear the task list before updating

  const startIndex = (currentPage - 1) * tasksPerPage;
  const endIndex = startIndex + tasksPerPage;

  for (let i = startIndex; i < endIndex && i < tasks.length; i++) {
    const task = tasks[i];

    // Create a list item for the task
    const li = document.createElement('li');
    li.textContent = `${task.title} - Due Date: ${task.dueDate} - Priority: ${task.priority}`;

    taskList.appendChild(li);
  }

  // Update pagination buttons
  const prevButton = document.getElementById('prevPage');
  const nextButton = document.getElementById('nextPage');
  prevButton.disabled = currentPage === 1;
  nextButton.disabled = endIndex >= tasks.length;

  // Update current page text
  const currentPageText = document.getElementById('currentPage');
  currentPageText.textContent = `Page ${currentPage}`;
}

// Function to handle previous page button click
function previousPage() {
  if (currentPage > 1) {
    currentPage--;
    displayTasks();
  }
}

// Function to handle next page button click
function nextPage() {
  const maxPage = Math.ceil(tasks.length / tasksPerPage);
  if (currentPage < maxPage) {
    currentPage++;
    displayTasks();
  }
}

// Function to handle search button click
function searchTasks() {
  const searchInput = document.getElementById('searchInput');
  const searchQuery = searchInput.value.toLowerCase();

  // Filter tasks based on search query
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery)
  );

  // Update tasks array with filtered tasks and display the first page
  tasks = filteredTasks;
  currentPage = 1;
  displayTasks();
}

// Function to handle sort by dropdown change
function sortTasks() {
  const sortBy = document.getElementById('sortBy').value;

  // Sort tasks based on selected criteria
  if (sortBy === 'dueDate') {
    tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  } else if (sortBy === 'priority') {
    tasks.sort((a, b) => a.priority.localeCompare(b.priority));
  }

  displayTasks();
}

// Function to handle filter by dropdown change
function filterTasks() {
  const filterBy = document.getElementById('filterBy').value;

  // Filter tasks based on selected status
  if (filterBy === 'completed') {
    tasks = tasks.filter((task) => task.status === 'completed');
  } else if (filterBy === 'pending') {
    tasks = tasks.filter((task) => task.status === 'pending');
  }

  currentPage = 1;
  displayTasks();
}

// Fetch tasks and display the initial page
fetchTasks();
displayTasks();
