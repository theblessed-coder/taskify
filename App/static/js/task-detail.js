// Sample task data
var task = {
  title: "Sample Task",
  description: "This is a sample task description.",
  dueDate: "2023-05-31",
  priority: "High",
  status: "In Progress",
};

// Function to display task details
function displayTaskDetails() {
  document.getElementById("title").textContent = task.title;
  document.getElementById("description").textContent = task.description;
  document.getElementById("due-date").textContent = task.dueDate;
  document.getElementById("priority").textContent = task.priority;
  document.getElementById("status").textContent = task.status;
}

// Function to mark task as completed
function markCompleted() {
  task.status = "Completed";
  displayTaskDetails();
}

// Function to update task
function updateTask() {
  // Implement your update task logic here
  alert("Update task functionality will be implemented.");
}

// Function to delete task
function deleteTask() {
  // Implement your delete task logic here
  alert("Delete task functionality will be implemented.");
}

// Display task details on page load
displayTaskDetails();
