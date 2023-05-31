// Sample project data
var projects = [
  {
    id: 1,
    name: "Project 1",
    tasks: [
      { id: 1, name: "Task 1" },
      { id: 2, name: "Task 2" },
    ],
  },
  {
    id: 2,
    name: "Project 2",
    tasks: [
      { id: 3, name: "Task 3" },
      { id: 4, name: "Task 4" },
    ],
  },
];

// Function to populate the project list
function populateProjectList() {
  var projectList = document.getElementById("projectList");
  projectList.innerHTML = "";

  projects.forEach(function (project) {
    var li = document.createElement("li");
    li.innerHTML = project.name;
    li.addEventListener("click", function () {
      displayProjectTasks(project);
    });
    projectList.appendChild(li);
  });
}

// Function to display tasks for a selected project
function displayProjectTasks(project) {
  var taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  project.tasks.forEach(function (task) {
    var li = document.createElement("li");
    li.innerHTML = task.name;
    taskList.appendChild(li);
  });
}

// Function to open the create project modal
function openCreateProjectModal() {
  var modal = document.getElementById("createProjectModal");
  modal.style.display = "block";
}

// Function to close the create project modal
function closeCreateProjectModal() {
  var modal = document.getElementById("createProjectModal");
  modal.style.display = "none";
}

// Function to create a new project
function createProject() {
  var projectName = document.getElementById("projectName").value;
  if (projectName.trim() === "") {
    alert("Please enter a project name.");
    return;
  }

  var newProject = {
    id: projects.length + 1,
    name: projectName,
    tasks: [],
  };

  projects.push(newProject);
  populateProjectList();
  closeCreateProjectModal();
}

// Function to open the create task modal
function openCreateTaskModal() {
  var modal = document.getElementById("createTaskModal");
  var projectSelect = document.getElementById("projectSelect");

  // Clear previous options
  projectSelect.innerHTML =
    '<option value="" selected disabled>Select Project</option>';

  // Populate project options
  projects.forEach(function (project) {
    var option = document.createElement("option");
    option.value = project.id;
    option.innerHTML = project.name;
    projectSelect.appendChild(option);
  });

  modal.style.display = "block";
}

// Function to close the create task modal
function closeCreateTaskModal() {
  var modal = document.getElementById("createTaskModal");
  modal.style.display = "none";
}

// Function to create a new task
function createTask() {
  var taskName = document.getElementById("taskName").value;
  var projectSelect = document.getElementById("projectSelect");
  var selectedProjectId = projectSelect.value;

  if (taskName.trim() === "") {
    alert("Please enter a task name.");
    return;
  }

  if (selectedProjectId === "") {
    alert("Please select a project.");
    return;
  }

  var selectedProject = projects.find(function (project) {
    return project.id === parseInt(selectedProjectId);
  });

  if (!selectedProject) {
    alert("Invalid project selected.");
    return;
  }

  var newTask = {
    id: selectedProject.tasks.length + 1,
    name: taskName,
  };

  selectedProject.tasks.push(newTask);
  displayProjectTasks(selectedProject);
  closeCreateTaskModal();
}

// Display project list on page load
populateProjectList();
