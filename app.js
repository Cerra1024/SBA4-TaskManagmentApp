let tasks = [];

let currentStatusFilter = "All";
let currentCategoryFilter = "All";

function filterStatus(status) {
    currentStatusFilter = status;
    renderTasks();
}

function filterCategory() {
    const select = document.getElementById("filterCategory");
    currentCategoryFilter = select.value;
    renderTasks();
}

const taskNameInput = document.getElementById("taskName");
const categoryInput = document.getElementById("category");
const deadlineInput = document.getElementById("deadline");
const statusInput = document.getElementById("status");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
    const name = taskNameInput.value;
    const category = categoryInput.value;
    const deadline = deadlineInput.value;
    const status = statusInput.value;

    if (name === "" || category === "" || deadline === "") {
        alert("Please fil in all fields");
        return;
    }

    const task = {
        name: name,
        category: category,
        deadline: deadline,
        status: status
    };

    tasks.push(task);

    renderTasks();
    clearInputs();

}

    function clearInputs() {
        taskNameInput.value = "";
        categoryInput.value = "";
        deadlineInput.value = "";
        statusInput.value = "In Progress";
    }

    function renderTasks() {
        checkOverdue();
        taskList.innerHTML = "";

       tasks
    .filter(task => {
        const statusMatch =
            currentStatusFilter === "All" || task.status === currentStatusFilter;

        const categoryMatch =
            currentCategoryFilter === "All" || task.category === currentCategoryFilter;

        return statusMatch && categoryMatch;
    })
    .forEach((task, index) => {
        const row = document.createElement("tr");

            if (task.status === "Completed") {
         row.classList.add("completed");
    } else if (task.status === "Overdue") {
        row.classList.add("overdue");
    } else {
         row.classList.add("in-progress");
}

            row.innerHTML = `
            <td>${task.name}</td>
            <td>${task.category}</td>
            <td>${task.deadline}</td>
            <td>
              <select onchange="updateStatus(${index}, this.value)">
                <option value="In Progress" ${task.status === "In Progress" ? "selected" : ""}>In Progress</option>
                <option value="Completed" ${task.status === "Completed" ? "selected" : ""}>Completed</option>
                <option value="Overdue" ${task.status === "Overdue" ? "selected" : ""}>Overdue</option>
            </select>
                </td>
         
           <td>
                <button onclick="deleteTask(${index})">Delete</button>
                </td> `;

            taskList.appendChild(row);

        });

    }

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function updateStatus(index, newStatus) {
    task[index].status = newStatus;
    renderTasks();
}

function checkOverdue() {
    const today = new Date();

    tasks.forEach(task => {
        const deadlineDate = new Date(task.deadline);

        if (task.status !== "Completed" && deadlineDate < today) {
            task.status = "Overdue";
        }
    });
}